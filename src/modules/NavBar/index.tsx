import React, { useState } from 'react';
import Logo from 'assets/Logo';
import Hamburger from 'components/Hamburger';
import NavBarLinks from 'modules/NavBarLinks';
import {
  StyledCollapsedNavBar,
  StyledContainer,
  StyledNavLinks,
  StyledWrapper,
} from './styles';

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledNavLinks>
          <Logo className="logo" />
          <NavBarLinks className="nav_bar_links" />
        </StyledNavLinks>

        <p className="nav_bar_actions">En</p>

        <Hamburger
          open={open}
          onClick={() => setOpen(!open)}
          className="hambugder_icon"
        />
      </StyledContainer>

      <StyledCollapsedNavBar open={open}>
        <NavBarLinks verticalOrientation />
        <p className="nav_bar_actions">En / Fr</p>
      </StyledCollapsedNavBar>
    </StyledWrapper>
  );
};

export default NavBar;
