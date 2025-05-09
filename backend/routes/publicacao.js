// routes/publicacoes.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// GET: Buscar publicações de um usuário específico
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: "userId obrigatório." });
  }

  try {
    const publicacoes = await prisma.publicacao.findMany({
      where: { userId },
    });

    return res.status(200).json({ publicacoes });
  } catch (erro) {
    console.error("Erro ao buscar publicações:", erro);
    return res.status(500).json({ error: "Erro ao buscar publicações." });
  }
});

// POST: Criar nova publicação
router.post("/", async (req, res) => {
  const { userId, titulo, categoria, descricao, imagem } = req.body;

  if (!userId || !titulo || !categoria || !descricao || !imagem) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const novaPublicacao = await prisma.publicacao.create({
      data: { userId, titulo, categoria, descricao, imagem },
    });

    return res.status(201).json(novaPublicacao);
  } catch (erro) {
    console.error("Erro ao criar publicação:", erro);
    return res.status(500).json({ error: "Erro ao criar publicação." });
  }
});

export default router;
