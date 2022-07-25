import Houses from 'modules/Houses';
import NavBar from 'modules/NavBar';
import Image from 'assets/image.png';
import { StyledWrapper } from 'theme/styles';
import { ButtonType } from 'types/Button';
import Button from 'components/Button';

const houses = [
  {
    picture: Image,
    price: '122212$',
    details: 'askjaskjasjkas',
  },
  {
    picture: Image,
    price: '122212$',
    details: 'askjaskjasjkas',
  },
  {
    picture: Image,
    price: '122212$',
    details: 'askjaskjasjkas',
  },
  {
    picture: Image,
    price: '122212$',
    details: 'askjaskjasjkas',
  },
  {
    picture: Image,
    price: '122212$',
    details: 'askjaskjasjkas',
  },
  {
    picture: Image,
    price: '122212$',
    details: 'askjaskjasjkas',
  },
];
const Home = () => {
  return (
    <StyledWrapper>
      <NavBar />

      <div className="hero">
        <h1>
          We are an award winning interior <br /> design Agency
        </h1>
        <Button className="button_home" variant={ButtonType.Secondary}>
          View all properties {'--->'}
        </Button>
      </div>
      <Houses houses={houses} />
    </StyledWrapper>
  );
};

export default Home;
