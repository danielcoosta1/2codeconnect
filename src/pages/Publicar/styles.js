import styled from "styled-components";

export const ContainerMainPublicar = styled.section`
  background-color: #171d1f;
  display: flex;
  padding: 2rem;
  gap: 1.5rem;
  min-width: 60rem;
  input {
    padding: 1em 1.5em;
    background-color: #888888;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export const ContainerEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContainerBtInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #888888;
`;

export const ContainerImgUpload = styled.div`
  background-color: #888888;
`;

export const ImgUpload = styled.img`
  width: 450px;
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  font-size: 1rem;
  color: #888888;
  padding: 1em 1.5em;
  background-color: transparent;
  border: 2px solid #888888;
  border-radius: 8px;
`;

export const ContainerInfoImgUpload = styled.div`
  display: flex;
  gap: 0.5em;

  img {
    margin-bottom: 1em;
    cursor: pointer;
  }
`;

export const ContainerDireito = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: #e1e1e1;

  h2 {
    font-size: 1.5rem;
  }
`;

export const ContainerInfoProjeto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ContainerInputNome = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerInputDescricao = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    background-color: #888888;
    border-radius: 4px;
    min-height: 60px;
    padding: 1em 1.5em;
    font-size: 1rem;
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
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  width: 100%;
  font-weight: bold;
`;

// Substitua seus botões por estes estilos:
export const BotaoDescartar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border: 1px solid #81fe88;
  color: #81fe88;
  background-color: transparent;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 100%;
  font-size: 1rem;

  &:hover {
    background-color: rgba(129, 254, 136, 0.1);
  }

  &:active {
    background-color: rgba(129, 254, 136, 0.2);
    transform: scale(0.98);
  }

  &:focus {
    outline: 2px solid #81fe88;
    outline-offset: 2px;
  }
`;

export const BotaoPublicar = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: 1rem;

  background-color: #81fe88;
  color: #132e35;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #6be276;
  }

  &:active {
    background-color: #5acd66;
    transform: scale(0.98);
  }

  &:focus {
    outline: 2px solid #132e35;
    outline-offset: 2px;
  }
`;
