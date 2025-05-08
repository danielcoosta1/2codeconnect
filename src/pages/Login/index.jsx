import {
  CampoInput,
  ContainerContent,
  ContainerDireita,
  ContainerEsquerda,
  ContainerInputs,
  ContainerLoginDigitado,
  ContainerWrapper,
} from "./styles";

import imgLogin from "./assets/img_login.png";

const Login = () => {
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
          </ContainerLoginDigitado>
        </ContainerDireita>
      </ContainerContent>
    </ContainerWrapper>
  );
};

export default Login;
