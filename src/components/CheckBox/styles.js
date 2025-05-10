import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);

  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CustomCheckbox = styled.span`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.checked ? "#00ff88" : "#fff")};
  border: 2px solid #00ff88;
  border-radius: 4px;
  transition: all 0.2s;
  display: inline-block;
  margin-right: 8px;
  position: relative;

  &::after {
    content: "${(props) => (props.checked ? "✔" : "")}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
    font-size: 16px;
    color: #000; /* ou branco se o fundo for escuro */
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px #00ff8855;
  }
`;

export const LabelText = styled.span`
  color: white;
`;
