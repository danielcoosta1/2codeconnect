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

    if (!publicacoes) {
      return res.status(200).json({ publicacoes: [] });
    }

    return res.status(200).json({ publicacoes });
  } catch (erro) {
    console.error("Erro ao buscar publicações:", erro);
    return res.status(500).json({ error: "Erro ao buscar publicações." });
  }
});

// POST: Criar nova publicação
// routes/publicacoes.js
router.post("/:userId", async (req, res) => {
  
  const { userId } = req.params;
  const { publicacao } = req.body;

  if (!publicacao) {
    return res.status(400).json({ error: "publicacao no body é obrigatório." });
  }

  try {
    const novaPublicacao = await prisma.publicacao.create({
      data: {
        userId,
        nome: publicacao.nome,
        descricao: publicacao.descricao,
        imagem: publicacao.imagem,
        nomeArquivo: publicacao.nomeArquivo, // só se você adicionou no schema
        tags: publicacao.tags,
      },
    });

    return res.status(201).json(novaPublicacao);
  } catch (erro) {
    console.error("Erro ao criar a publicação:", erro);
    return res.status(500).json({ error: "Erro ao criar publicação." });
  }
});

export default router;
