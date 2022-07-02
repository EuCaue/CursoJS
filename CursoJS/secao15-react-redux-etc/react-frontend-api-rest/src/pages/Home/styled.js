// Style for the home page

import styled from 'styled-components';
import { primaryDarkColor } from '../../config/colors';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: normal;
  text-align: center;
  font-family: 'Fira Sans', sans-serif;
  font-weight: bold;
  :hover{
    font-size: 79px;
    font-weight: normal;
    transition: 850ms;
    color: ${primaryDarkColor};
  }
`;
