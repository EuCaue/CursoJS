// style for the Header
import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    color: #FFF;
    font-weight: bold;
    justify-content: right;
  }

  span {
    display: flex;
    justify-content: right;

    }
  .faUser {
    margin: 0 10px 0 0;
  }


`;
