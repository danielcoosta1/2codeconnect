// src/pages/NovaSenha.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  ButtonSubmit,
  ContainerContent,
  ContainerForm,
  ContainerImg,
  ContainerWrapper,
  Form,
  InputWrapper,
  MatchIcon,
} from "./style";

import imgEsqueciSenha from "./assets/img_novasenha.png";
import iconeArrowForward from "../assets/forward_arrow.svg";

const NovaSenha = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const senhasPreenchidas = novaSenha && confirmarSenha;
  const senhasIguais = novaSenha === confirmarSenha;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!senhasIguais) {
      return toast.error("As senhas não coincidem.");
    }

    try {
      const resposta = await fetch("http://localhost:3001/usuarios/nova-senha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, novaSenha }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        toast.error(dados.erro || "Erro ao redefinir senha.");
      } else {
        toast.success("Senha redefinida com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
    } catch (erro) {
      console.error(erro);
      toast.error("Erro interno.");
    }
  };

  return (
    <ContainerWrapper>
      <ContainerContent>
        <ContainerImg>
          <img src={imgEsqueciSenha} alt="Imagem redefinir senha" />
        </ContainerImg>
        <ContainerForm>
          <h1>Redefinir Senha</h1>
          <p>Digite sua nova senha abaixo</p>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="novaSenha">Nova Senha</label>
            <input
              id="novaSenha"
              type="password"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              required
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <label htmlFor="confirmarSenha">Confirmar Nova Senha</label>
            <InputWrapper>
              <input
                id="confirmarSenha"
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
              {senhasPreenchidas && (
                <MatchIcon $match={senhasIguais}>
                  {senhasIguais ? "✓" : "✖"}
                </MatchIcon>
              )}
            </InputWrapper>

            <ButtonSubmit type="submit">
              Salvar <img src={iconeArrowForward} alt="ícone de avançar" />
            </ButtonSubmit>
          </Form>
        </ContainerForm>
      </ContainerContent>
    </ContainerWrapper>
  );
};

export default NovaSenha;
