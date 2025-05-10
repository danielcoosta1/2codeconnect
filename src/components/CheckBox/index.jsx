import { CheckboxContainer, CustomCheckbox, HiddenCheckbox, LabelText } from "./styles";

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <CustomCheckbox checked={checked} />
      <LabelText>{label}</LabelText>
    </CheckboxContainer>
  );
};


export default Checkbox;
