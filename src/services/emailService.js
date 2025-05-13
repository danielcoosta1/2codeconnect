// src/services/emailService.js
import nodemailer from "nodemailer";
/* global process */
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.ETHEREAL_USER,
    pass: process.env.ETHEREAL_PASS,
  },
});

export async function enviarEmailRedefinicao(destinatario, link) {
  const info = await transporter.sendMail({
    from: '"CodeConnect" <nao-responda@codeconnect.com>',
    to: destinatario,
    subject: "Redefinição de Senha",
    html: `<p>Olá! Clique no link abaixo para redefinir sua senha:</p>
           <a href="${link}">${link}</a>`,
  });

  console.log("E-mail enviado:", nodemailer.getTestMessageUrl(info)); // para debug
}
