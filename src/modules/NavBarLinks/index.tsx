import React from 'react';
import { StyledLinks, StyledListElement } from './styles';

interface INavBarLinks {
  verticalOrientation?: boolean;
  className?: string;
}

const links = [
  { href: '/', name: 'About us' },
  { href: '/', name: 'Projects' },
  { href: '/', name: 'Career' },
  { href: '/', name: 'Contacts' },
];

const NavBarLinks = ({ verticalOrientation, className }: INavBarLinks) => {
  return (
    <StyledLinks
      verticalOrientation={verticalOrientation}
      className={className}
    >
      {links.map(({ name, href }, index) => (
        <StyledListElement
          verticalOrientation={verticalOrientation}
          key={index}
        >
          <a href={href}>{name}</a>
        </StyledListElement>
      ))}
    </StyledLinks>
  );
};

export default NavBarLinks;
