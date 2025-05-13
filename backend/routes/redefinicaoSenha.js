// src/routes/redefinicaoSenha.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import bcrypt from "bcrypt";
/* global process */
import { enviarEmailRedefinicao } from "../../src/services/emailService";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/redefinir-senha", async (req, res) => {
  const { email } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });

    if (!usuario) {
      // Não revela se o e-mail existe por segurança
      return res
        .status(200)
        .json({ mensagem: "Se esse e-mail existir, enviaremos o link." });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiracao = new Date(Date.now() + 1000 * 60 * 60); // 1 hora

    await prisma.usuario.update({
      where: { email },
      data: {
        tokenRedefinicao: token,
        tokenExpiracao: expiracao,
      },
    });

    const link = `${process.env.FRONTEND_URL}/nova-senha/${token}`;
    await enviarEmailRedefinicao(email, link);
    return res.status(200).json({ mensagem: "Link de redefinição enviado." });
  } catch (error) {
    console.error("Erro ao enviar link:", error);
    res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

router.post("/nova-senha", async (req, res) => {
  const { token, novaSenha } = req.body;

  try {
    const usuario = await prisma.usuario.findFirst({
      where: {
        tokenRedefinicao: token,
        tokenExpiracao: { gte: new Date() }, // ainda válido
      },
    });

    if (!usuario) {
      return res.status(400).json({ erro: "Token inválido ou expirado." });
    }

    const senhaHash = await bcrypt.hash(novaSenha, 10);

    await prisma.usuario.update({
      where: { id: usuario.id },
      data: {
        senha: senhaHash,
        tokenRedefinicao: null,
        tokenExpiracao: null,
      },
    });

    res.json({ mensagem: "Senha redefinida com sucesso." });
  } catch (error) {
    console.error("Erro ao redefinir senha:", error);
    res.status(500).json({ erro: "Erro interno no servidor." });
  }
});
