import styled from 'styled-components';
import { device } from 'theme/device';

export const theme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',

    white: '#fff',
    black: '#000',
  },
};

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 1.5625rem 1.5625rem;

  .hero {
    margin: 50px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      text-align: left;
    }

    .button_home {
      font-weight: 600;
      font-size: 24px;
    }

    @media ${device.mobile} {
      flex-direction: column;
      align-items: start;
    }
  }
`;

export { StyledWrapper };
