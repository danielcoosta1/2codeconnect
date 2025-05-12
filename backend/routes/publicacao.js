import express from "express";
import { PrismaClient } from "@prisma/client";
import { ObjectId } from "bson"; // Importa o conversor de ObjectId

const prisma = new PrismaClient();
const router = express.Router();

// GET: Buscar publicações de um usuário específico
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!userId || !ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "userId inválido ou ausente." });
  }

  try {
    const publicacoes = await prisma.publicacao.findMany({
      where: {
        userId: new ObjectId(userId).toString(), // Garante que é compatível com o schema
      },
    });

    return res.status(200).json({ publicacoes });
  } catch (erro) {
    console.error("Erro ao buscar publicações:", erro);
    return res.status(500).json({ error: "Erro ao buscar publicações." });
  }
});

// POST: Criar nova publicação
router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { publicacao } = req.body;

  if (!userId || !ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "userId inválido ou ausente." });
  }

  if (!publicacao) {
    return res.status(400).json({ error: "publicacao no body é obrigatório." });
  }

  if (!publicacao.nome || publicacao.nome.trim() === "") {
    return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
  }

  try {
    const novaPublicacao = await prisma.publicacao.create({
      data: {
        userId: new ObjectId(userId).toString(), // Conversão segura para string válida
        nome: publicacao.nome,
        descricao: publicacao.descricao || "",
        imagem: publicacao.imagem || "",
        nomeArquivo: publicacao.nomeArquivo || "",
        tags: publicacao.tags || [],
      },
    });

    return res.status(201).json(novaPublicacao);
  } catch (erro) {
    console.error("Erro ao criar a publicação:", erro);
    return res.status(500).json({ error: "Erro ao criar publicação." });
  }
});

export default router;
