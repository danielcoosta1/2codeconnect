// src/pages/EsqueciSenha.jsx
import { useState } from "react";

const EsqueciSenha = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem(""); // limpa antes de enviar

    try {
      const resposta = await fetch("http://localhost:3000/redefinir-senha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const dados = await resposta.json();
      setMensagem(dados.mensagem);
    } catch (erro) {
      console.error("Erro ao enviar requisição:", erro);
      setMensagem("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h1>Esqueci minha senha</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Digite seu e-mail cadastrado:</label>
        <input
          id="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <button type="submit">Enviar link de redefinição</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default EsqueciSenha;
