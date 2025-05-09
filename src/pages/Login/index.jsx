import {
  CampoInput,
  ContainerContent,
  ContainerDireita,
  ContainerEsquerda,
  ContainerInputs,
  ContainerLembrarEsqueci,
  ContainerLoginDigitado,
  ContainerWrapper,
} from "./styles";

import imgLogin from "./assets/img_login.png";
import { useState } from "react";
import Checkbox from "../../components/CheckBox";

const Login = () => {
  const [lembrarMe, setLembrarMe] = useState(false);

  const toggleLembrarMe = () => {
    setLembrarMe((prev) => !prev); // alterna entre true e false
  };

  return (
    <ContainerWrapper>
      <ContainerContent>
        <ContainerEsquerda>
          <img src={imgLogin} />
        </ContainerEsquerda>
        <ContainerDireita>
          <ContainerLoginDigitado>
            <h1>Login</h1>
            <p>Boas-vindas! Faça seu login</p>
            <ContainerInputs>
              <CampoInput>
                <label htmlFor="email">E-mail </label>
                <input id="email" type="email" />
              </CampoInput>
              <CampoInput>
                <label htmlFor="senha">Senha </label>
                <input id="senha" type="password" />
              </CampoInput>
            </ContainerInputs>
            <ContainerLembrarEsqueci>
              <Checkbox
                checked={lembrarMe}
                onChange={toggleLembrarMe}
                label="Lembrar-me"
              />
              <p>Esqueci a senha</p>
            </ContainerLembrarEsqueci>
          </ContainerLoginDigitado>
        </ContainerDireita>
      </ContainerContent>
    </ContainerWrapper>
  );
};

export default Login;
