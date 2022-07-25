import styled from 'styled-components';
import { device } from 'theme/device';

interface IStyledCollapsedNavBar {
  open: boolean;
}

const StyledWrapper = styled.div`
  font-size: 0.875rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    z-index: 3;
    margin-right: 3.75rem;
  }

  .hambugder_icon {
    display: none;

    @media ${device.tablet} {
      display: block;
    }
  }

  .nav_bar_links,
  .nav_bar_actions {
    @media ${device.tablet} {
      display: none;
    }
  }
`;

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const StyledCollapsedNavBar = styled.div<IStyledCollapsedNavBar>`
  display: block;
  width: 100vw;
  height: 100%;
  position: fixed;
  margin: 0;
  padding: 7rem;
  text-align: center;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91) 0s;
  top: ${({ open }) => (!open ? '100%' : '0%')};
  padding-left: 0;
`;

export {
  StyledContainer,
  StyledCollapsedNavBar,
  StyledNavLinks,
  StyledWrapper,
};
