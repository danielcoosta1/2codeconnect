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
`;

export const ContainerLoginDigitado = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

h1{
  font-size: 2rem;
  margin-bottom: 1rem;
}

p{
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
`;

export const ContainerInputs = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const CampoInput = styled.div`
display: flex;
flex-direction: column;
gap: .25rem;
font-size: 1rem;
input{
  padding: .75rem 1rem;
  background-color: #888888;
  border-radius: 8px;
  }
`;

export const ContainerLembrarEsqueci = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

p{
  text-decoration: underline;
  font-size: 1rem;
  margin-bottom: 0;
}
`;

export const CheckLembrar = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: .5em;

`;

export const InputCheckBox = styled.input``;

export const LembrarButton = styled.button``;

export const ContainerLoginContas = styled.div``;

export const ContainerCadastro = styled.div``;
