import React, { ButtonHTMLAttributes } from 'react';
import { RoundedButton } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <RoundedButton {...rest}>{children}</RoundedButton>;
};

export default Button;
