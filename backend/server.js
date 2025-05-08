import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
/* global process */
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

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
