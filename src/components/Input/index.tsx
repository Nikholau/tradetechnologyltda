import React from 'react';
import { StyleInput, InputContainer, Label } from './style';

interface InputProps {
  onChange: (value: string) => void;
  value: string;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  placeholder,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyleInput
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default Input;
