// src/pages/EsqueciSenha.jsx
import { useState } from "react";
import {
  ButtonSubmit,
  ContainerContent,
  ContainerForm,
  ContainerImg,
  ContainerWrapper,
  Form,
} from "./style";

import imgEsqueciSenha from "./assets/img_esquecisenha.png";

import iconeArrowForward from "../assets/forward_arrow.svg";

const EsqueciSenha = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem(""); // limpa antes de enviar
    setCarregando(true);

    try {
      const resposta = await fetch(
        "http://localhost:3001/usuarios/redefinir-senha",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const dados = await resposta.json();
      setMensagem(dados.mensagem);
    } catch (erro) {
      console.error("Erro ao enviar requisição:", erro);
      setMensagem("Ocorreu um erro. Tente novamente mais tarde.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ContainerWrapper>
      <ContainerContent>
        <ContainerImg>
          <img src={imgEsqueciSenha} />
        </ContainerImg>
        <ContainerForm>
          <h1>Esqueci minha senha</h1>
          <p>Envio de link para redefinição de senha</p>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <ButtonSubmit type="submit">
              {carregando ? <>🔄 Enviando...</> : "Enviar"}{" "}
              <img src={iconeArrowForward} />
            </ButtonSubmit>
          </Form>
          {mensagem && <p>{mensagem}</p>}
        </ContainerForm>
      </ContainerContent>
    </ContainerWrapper>
  );
};

export default EsqueciSenha;
