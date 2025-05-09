import {
  ButtonSubmitCadastro,
  CampoInput,
  ContainerContent,
  ContainerDireita,
  ContainerEsquerda,
  ContainerInputs,
  ContainerLembrar,
  ContainerWrapper,
  FormularioCadastro,
} from "./styles";
import { useState } from "react";
import imgCadastro from "./assets/img_cadastro.png";
import Checkbox from "../../components/CheckBox";

import iconeArrowForward from "../assets/forward_arrow.svg";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");

  const [lembrarMe, setLembrarMe] = useState(false);

  const [carregando, setCarregando] = useState(false);

  const toggleLembrarMe = () => {
    setLembrarMe((prev) => !prev); // alterna entre true e false
  };
  return (
    <ContainerWrapper>
      <ContainerContent>
        <ContainerEsquerda>
          <img src={imgCadastro} />
        </ContainerEsquerda>
        <ContainerDireita>
          <h1>Cadastro</h1>
          <p>Olá! Preencha seus dados abaixo.</p>
          <FormularioCadastro>
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
            <ButtonSubmitCadastro type="submit" disabled={carregando}>
              {carregando ? <>🔄 Cadastrando...</> : "Entrar"}
              <img src={iconeArrowForward} />
            </ButtonSubmitCadastro>
          </FormularioCadastro>
        </ContainerDireita>
      </ContainerContent>
    </ContainerWrapper>
  );
};

export default Cadastro;
