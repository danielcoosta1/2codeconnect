import {
  ButtonSubmitLogin,
  CampoInput,
  ContainerContent,
  ContainerDireita,
  ContainerEsquerda,
  ContainerInputs,
  ContainerLembrarEsqueci,
  ContainerLoginDigitado,
  ContainerWrapper,
  FormularioLogin,
} from "./styles";

import imgLogin from "./assets/img_login.png";

import iconeArrowForward from "../assets/forward_arrow.svg";
import { useState } from "react";
import Checkbox from "../../components/CheckBox";

import { useAuth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import { toastErro, toastSucesso } from "../../utils/toast";

const Login = () => {
  const [lembrarMe, setLembrarMe] = useState(false);

  const toggleLembrarMe = () => {
    setLembrarMe((prev) => !prev); // alterna entre true e false
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");

  const [carregando, setCarregando] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/feed";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      await login({ email, senha });
      toastSucesso("Login efetuado com sucesso");
      navigate(from, { replace: true });
      // navigate(from, { replace: true });
    } catch (err) {
      console.error("Erro ao fazer login:", err.message);
      setErro("E-mail ou senha inválidos.");
      toastErro("E-mail ou senha inválidos.");
    } finally {
      setCarregando(false);
    }
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
            {erro && <p style={{ color: "red", marginTop: "1rem" }}>{erro}</p>}
            <FormularioLogin onSubmit={handleSubmit}>
              <ContainerInputs>
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
              <ContainerLembrarEsqueci>
                <Checkbox
                  checked={lembrarMe}
                  onChange={toggleLembrarMe}
                  label="Lembrar-me"
                />
                <p>Esqueci a senha</p>
              </ContainerLembrarEsqueci>

              <ButtonSubmitLogin type="submit" disabled={carregando}>
                {carregando ? <>🔄 Entrando...</> : "Entrar"}
                <img src={iconeArrowForward} />
              </ButtonSubmitLogin>
            </FormularioLogin>
          </ContainerLoginDigitado>
        </ContainerDireita>
      </ContainerContent>
    </ContainerWrapper>
  );
};

export default Login;
