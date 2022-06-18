import styled, { createGlobalStyle } from 'styled-components';

// Default styles for the application

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: #eee;
    font-family: 'Inter', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  /* Default style for buttons in the application */
  button {
    cursor: pointer;
  }

  /* Default style for links in the application  */
  a {
    text-decoration: none;
  }
  /* Default style for ul tag in the application */
  ul {
    list-style: none;
  }
`;

// Estilo da section clas="Container"
export const Container = styled.section`
  max-width: 360px;
  background: #2d3;
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
`;
