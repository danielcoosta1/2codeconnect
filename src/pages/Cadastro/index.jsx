import {
  BotaoAlternativo,
  ButtonSubmitCadastro,
  CampoInput,
  ContainerContent,
  ContainerDireita,
  ContainerEsquerda,
  ContainerInputs,
  ContainerLembrar,
  ContainerSucesso,
  ContainerWrapper,
  FormularioCadastro,
} from "./styles";
import { useState } from "react";
import imgCadastro from "./assets/img_cadastro.png";
import Checkbox from "../../components/CheckBox";

import iconeArrowForward from "../assets/forward_arrow.svg";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");

  const [lembrarMe, setLembrarMe] = useState(false);

  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const toggleLembrarMe = () => {
    setLembrarMe((prev) => !prev); // alterna entre true e false
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      const resposta = await fetch("http://localhost:3001/usuarios/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });
      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.erro || "Erro ao cadastrar");
      }

      setCadastroSucesso(true);
    } catch (err) {
      console.error("Erro no cadastro:", err.message);
      setErro(err.message);
    }
  };
  return (
    <ContainerWrapper>
      <ContainerContent>
        {!cadastroSucesso ? (
          <>
            <ContainerEsquerda>
              <img src={imgCadastro} />
            </ContainerEsquerda>
            <ContainerDireita>
              <h1>Cadastro</h1>
              <p>Olá! Preencha seus dados abaixo.</p>
              <FormularioCadastro onSubmit={handleSubmit}>
                <ContainerInputs>
                  <CampoInput>
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      value={nome}
                      id="nome"
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </CampoInput>
                  <CampoInput>
                    <label htmlFor="email">E-mail </label>
                    <input
                      type="email"
                      value={email}
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </CampoInput>
                  <CampoInput>
                    <label htmlFor="senha">Senha </label>
                    <input
                      type="password"
                      value={senha}
                      id="senha"
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />
                  </CampoInput>
                </ContainerInputs>
                <ContainerLembrar>
                  <Checkbox
                    checked={lembrarMe}
                    onChange={toggleLembrarMe}
                    label="Lembrar-me"
                  />
                </ContainerLembrar>
                <ButtonSubmitCadastro type="submit">
                  Cadastrar
                  <img src={iconeArrowForward} />
                </ButtonSubmitCadastro>
              </FormularioCadastro>
              {erro && <p style={{ color: "red" }}>{erro}</p>}
            </ContainerDireita>{" "}
          </>
        ) : (
          <ContainerSucesso>
            <h1>Cadastro realizado com sucesso!</h1>
            <p>
              {" "}
              Você foi cadastrado com sucesso! Agora, você pode fazer login e
              navegar na plataform!
            </p>

            <BotaoAlternativo onClick={() => navigate("/login")}>
              Fazer login
            </BotaoAlternativo>
          </ContainerSucesso>
        )}
        ;
      </ContainerContent>
    </ContainerWrapper>
  );
};

export default Cadastro;
