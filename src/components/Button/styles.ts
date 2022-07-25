import styled from 'styled-components';
import { ButtonType } from 'types/Button';

interface IStyledButton {
  variant?: ButtonType;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const StyledButton = styled.button.attrs((props) => ({
  type: props.type,
  onClick: props.onClick,
  className: props.className,
}))<IStyledButton>`
  height: fit-content;
  padding: 0.5rem 1.4rem;
  outline: none;
  cursor: pointer;
  background-color: ${({ variant, theme }) =>
    variant === ButtonType.Primary ? theme.colors.primary : theme.colors.white};
  color: ${({ variant, theme }) =>
    variant === ButtonType.Primary ? theme.colors.white : theme.colors.black};
  border: ${({ variant, theme }) =>
    variant === ButtonType.Primary
      ? `1px solid ${theme.colors.primary} `
      : ` 1px solid ${theme.colors.black}`};
`;

export { StyledButton };
