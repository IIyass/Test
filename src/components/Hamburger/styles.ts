import styled from 'styled-components';

interface IHamburgerStyle {
  open: boolean;
}

const StyledHamburger = styled.div<IHamburgerStyle>`
  cursor: pointer;
  z-index: 3;
  .bar {
    height: 0.15rem;
    width: 1.6rem;
    margin-bottom: 0.3rem;
    transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91) 0s,
      opacity 500ms ease 0s, box-shadow 250ms ease 0s,
      background-color 500ms ease 0s;
    background-color: ${({}) => 'rgb(97, 97, 97)'};
    :nth-child(2) {
      opacity: ${({ open }) => (!open ? '1' : '0')};
    }
    :nth-child(1) {
      transform: ${({ open }) => open && 'translateY(8px) rotate(-135deg)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open && 'translateY(-6px) rotate(-45deg)'};
    }
  }
`;

export { StyledHamburger };
