// src/pages/EsqueciSenha.jsx
import { useState } from "react";

const EsqueciSenha = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui seria a chamada para seu backend
    console.log("Enviando link para:", email);

    // Simulação de sucesso:
    setMensagem("Se esse e-mail estiver cadastrado, enviaremos um link para redefinir sua senha.");
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
