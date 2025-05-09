import styled from "styled-components";

export const ContainerWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #00090e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.section`
  display: flex;
  gap: 5rem;
  padding: 4em;
  background-color: #171d1f;
`;

export const ContainerEsquerda = styled.div``;

export const ContainerDireita = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const FormularioCadastro = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CampoInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1rem;
  input {
    padding: 0.75rem 1rem;
    background-color: #888888;
    border-radius: 8px;
  }
`;

export const ContainerLembrar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const ButtonSubmitCadastro = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  font-size: 1.25rem;
  background-color: #81fe88;
  color: #132e35;
  border: none;
  padding: 0.5em 1em;
  font-weight: 600;
  border-radius: 8px;

  margin-top: 2rem;
`;

export const ContainerSucesso = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const BotaoAlternativo = styled.button`
  padding: 12px;
  background-color: #ffa724;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #ff8c00;
  }
`;