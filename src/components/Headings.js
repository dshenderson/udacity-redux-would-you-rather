import styled from '@emotion/styled';

export const MainHeading = styled.h1`
  font-family: 'death_starregular', serif;
  font-size: 4rem;
  color: black;
  -webkit-text-fill-color: black;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: gold;
  text-shadow: 3px 3px 0 silver, -1px -1px 0 silver, 1px -1px 0 silver, -1px 1px 0 silver, 1px 1px 0 silver;
  @media (max-width: 414px) {
    font-size: 2rem;
    -webkit-text-stroke-width: 1px;
  }
`;

export const SubHeading = styled.h2`
  font-family: 'death_starregular', serif;
  font-size: 1rem;
  color: black;
  -webkit-text-fill-color: silver;
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: black;
`;
