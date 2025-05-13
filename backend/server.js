import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import loginRoutes from "./routes/login.js";
import cadastroRoutes from "./routes/cadastro.js";
import publicacaoRoutes from "./routes/publicacao.js";
import redefinicaoSenhaRoutes from "./routes/redefinicaoSenha.js";
// <-- carrega as variáveis do .env
/* global process */
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/usuarios/cadastro", cadastroRoutes); // Usando a rota de cadastro
app.use("/usuarios/login", loginRoutes); // Usando a rota de login
app.use("/publicacoes", publicacaoRoutes);
app.use("/usuarios", redefinicaoSenhaRoutes);

// Verifica a conexão com o banco de dados
prisma
  .$connect()
  .then(() => console.log("Conexão com o banco de dados estabelecida."))
  .catch((error) => {
    console.error("Erro ao conectar com o banco de dados:", error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Backend CodeConnect rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
