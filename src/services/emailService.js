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
  await transporter.sendMail({
    from: '"Equipe CodeConnect" <no-reply@codeconnect.com>',
    to: destinatario,
    subject: "🔐 Redefinição de senha - CodeConnect",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #4F46E5;">Olá!</h2>
        <p>Recebemos uma solicitação para redefinir a sua senha na <strong>CodeConnect</strong>.</p>
        <p>Para criar uma nova senha, clique no botão abaixo:</p>
        <a href="${link}" target="_blank"
          style="display: inline-block; padding: 0.75rem 1.5rem; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 4px; margin-top: 1rem;">
          Redefinir senha
        </a>
        <p style="margin-top: 2rem;">Se você não solicitou isso, pode ignorar este e-mail.</p>
        <hr style="margin: 2rem 0;" />
        <p style="font-size: 0.875rem; color: #888;">Equipe CodeConnect • Não responda a este e-mail.</p>
      </div>
    `,
  });
}
