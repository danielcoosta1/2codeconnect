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
  color: #e1e1e1;
  gap: 3rem;
  padding: 2em;
  background-color: #171d1f;
`;

export const ContainerImg = styled.div``;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h1 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }
`;

export const Form = styled.form`
  input {
    padding: 0.75rem 1rem;
    background-color: #888888;
    border-radius: 8px;
  }
`;

export const ButtonSubmit = styled.button`
  font-size: 1.25rem;
  background-color: #81fe88;
  color: #132e35;
  border: none;
  padding: 0.5em 1em;
  font-weight: 600;
  border-radius: 8px;

  margin-top: 2rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding-right: 2rem;
  }
`;

export const MatchIcon = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => (props.$match ? "#81fe88" : "#ff4e4e")};
`;
