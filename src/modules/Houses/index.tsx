import Card from 'components/Card';
import styled from 'styled-components';
import { device } from 'theme/device';

const Houses = ({ houses }: any) => {
  return (
    <StyledGridLayout>
      {houses.map(
        (
          house: { picture: any; price: string; details: string },
          index: number
        ) => {
          return (
            <div className={`box${index + 1}`}>
              <Card
                picture={house.picture}
                price={house.price}
                details={house.details}
              />
            </div>
          );
        }
      )}
    </StyledGridLayout>
  );
};

export const StyledGridLayout = styled.div`
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 38% 32% 28%;
  grid-template-rows: 44% 12.9% 39.5%;
  gap: 20px;

  .box1 {
    grid-row-start: 1;
    grid-row-end: span 1;

    @media ${device.tablet} {
      grid-row-start: 1;
      grid-row-end: span 1;
    }

    @media ${device.mobile} {
      grid-row-start: unset;
      grid-row-end: unset;
    }
  }

  .box2 {
    grid-row-start: 2;
    grid-row-end: span 2;

    @media ${device.tablet} {
      grid-row-start: 1;
      grid-row-end: span 1;
    }
    @media ${device.mobile} {
      grid-row-start: unset;
      grid-row-end: unset;
    }
  }

  .box3 {
    grid-row-start: 1;
    grid-row-end: span 2;

    @media ${device.tablet} {
      grid-row-start: 2;
      grid-row-end: span 1;
    }
    @media ${device.mobile} {
      grid-row-start: unset;
      grid-row-end: unset;
    }
  }

  .box4 {
    grid-row-start: 3;
    grid-row-end: span 1;

    @media ${device.tablet} {
      grid-row-start: 2;
      grid-row-end: span 1;
    }
    @media ${device.mobile} {
      grid-row-start: unset;
      grid-row-end: unset;
    }
  }

  .box5 {
    grid-row-start: 1;
    grid-row-end: span 1;

    @media ${device.tablet} {
      grid-row-start: 3;
      grid-row-end: span 1;
    }
    @media ${device.mobile} {
      grid-row-start: unset;
      grid-row-end: unset;
    }
  }

  .box6 {
    grid-row-start: 2;
    grid-row-end: span 2;

    @media ${device.tablet} {
      grid-row-start: 3;
      grid-row-end: span 1;
    }

    @media ${device.mobile} {
      grid-row-start: unset;
      grid-row-end: unset;
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 50% 50%;
    grid-template-rows: 33% 33% 33%;
  }
  @media ${device.mobile} {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
`;

export default Houses;
