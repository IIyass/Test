import styled from 'styled-components';

interface IStyledPropsLinks {
  verticalOrientation?: boolean;
  className?: string;
}

interface IStyledPropsElement {
  verticalOrientation?: boolean;
  key: number;
}

const StyledLinks = styled.ul<IStyledPropsLinks>`
  display: flex;
  flex-direction: ${({ verticalOrientation }) =>
    !verticalOrientation ? 'row' : 'column'};
  margin: 0;
  padding: 0;
`;

const StyledListElement = styled.li<IStyledPropsElement>`
  display: ${({ verticalOrientation }) =>
    verticalOrientation ? 'block' : 'inline'};
  cursor: pointer;

  margin-bottom: ${({ verticalOrientation }) =>
    verticalOrientation ? '0.8rem' : '0rem'};

  :not(:last-child) {
    margin-right: ${({ verticalOrientation }) =>
      verticalOrientation ? '0rem' : '2.5rem'};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export { StyledLinks, StyledListElement };
