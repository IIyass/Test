import React from 'react';
import { StyledHamburger } from './styles';

interface IHamburger {
  className?: string;
  open: boolean;
  onClick?: () => void;
}

const Hamburger = ({ open, className, onClick }: IHamburger) => {
  return (
    <StyledHamburger className={className} onClick={onClick} open={open}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </StyledHamburger>
  );
};

export default Hamburger;
