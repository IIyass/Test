import React from 'react';
import { ButtonType } from 'types/Button';
import { StyledButton } from './styles';

interface Props {
  variant?: ButtonType;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  variant,
  type,
  className,
  onClick,
  ...props
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
