import Heart from 'assets/Heart';
import Button from 'components/Button';
import styled from 'styled-components';
import { device } from 'theme/device';
import { ButtonType } from 'types/Button';

interface Props {
  className: string;
  picture: any;
}
const Card = ({ picture, className, price, details }: any) => {
  return (
    <StyledWrapper>
      <StyledCardHeader picture={picture} className={className}>
        <Heart className="heart" />
        <div className="bottom">
          <h1>{price}</h1> <span>{details}</span>
        </div>
      </StyledCardHeader>
      <div className="footer">
        <div className="details">
          <h1>{price}</h1> <span>{details}</span>
        </div>
        <Button variant={ButtonType.Primary}> View Details + </Button>
      </div>
    </StyledWrapper>
  );
};

export default Card;

const StyledCardHeader = styled.div.attrs((props) => ({
  className: props.className,
}))<Props>`
  height: 100%;
  width: 100%;
  position: relative;
  background-image: ${({ picture }) => `url(${picture})`};
  background-size: cover;
  background-position: center;
  display: flex;

  .heart {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0.625rem 0rem;

    color: white;
    width: 90%;
    margin: 0 auto;

    h1 {
      font-size: 0.875rem;
      margin: 0;
      padding: 0;
    }

    @media ${device.mobile} {
      display: none !important;
    }
  }

  @media ${device.tablet} {
    padding-top: 60%;
    height: unset;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  [aria-hidden='true'] {
    padding-top: 100%;
  }
  .footer {
    display: none;

    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 0.875rem;
      }
    }
    @media ${device.mobile} {
      display: block;
    }
  }
`;
