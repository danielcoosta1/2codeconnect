import styled from "styled-components";

export const ContainerMainPublicar = styled.section`
  background-color: #171d1f;
  display: flex;
  padding: 2rem;
  gap: 1.5rem;
  min-width: 60rem;
  input {
    padding: 0.5em 1.5em;
    background-color: #888888;
    border-radius: 4px;
  }
`;

export const ContainerEsquerdo = styled.div``;

export const ContainerImgUpload = styled.div`
  background-color: #888888;
`;

export const ImgUpload = styled.img`
  width: 450px;
`;

export const UploadButton = styled.button``;

export const ContainerInfoImgUpload = styled.div``;

export const ContainerDireito = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: #e1e1e1;

  h2 {
    font-size: 1.25rem;
  }
`;

export const ContainerInfoProjeto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InputNomeProjeto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputDescricaoProjeto = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    background-color: #888888;
    border-radius: 4px;
    min-height: 60px;
  }
`;

export const ContainerTags = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
`;

export const Tags = styled.div``;

export const ContainerBotoes = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  font-weight: bold;
`;

export const BotaoDescartar = styled.div`
  display: flex;
  gap: 0.5em;
  border: 1px solid #81fe88;
  color: #81fe88;
  background-color: transparent;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const BotaoPublicar = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: #81fe88;
  color: #132e35;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
`;


