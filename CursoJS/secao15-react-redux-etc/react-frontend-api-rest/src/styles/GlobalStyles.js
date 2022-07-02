import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

// Default styles for the application

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }

  html, body, #root {
    height: 100%;
  }

  /* Default style for buttons in the application */
  button {
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    color: #ccc;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  /* Default style for links in the application  */
  a {
    color: ${colors.primaryColor};
    text-decoration: none;
  }
  /* Default style for ul tag in the application */
  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.sucessColor};
    font-family: 'Patua One', sans-serif;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.primaryDarkColor};
    font-family: 'Patua One', sans-serif;
}
`;

// Style for section, class="Container"
export const Container = styled.section`
  max-width: 360px;
  background: #ccc;
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
`;
