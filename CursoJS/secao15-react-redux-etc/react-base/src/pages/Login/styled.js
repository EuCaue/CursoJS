import styled from 'styled-components';
// File for style in the Login Page

// h1 style
export const Title = styled.h1`
/* Tudo que está "fora" de chaves é o styled.any e o que estiver dentro de chaves é filho do .any */
  background: chocolate;

  small {
    font-size: 12pt;
    margin-left: 15px;
    color: blue;
  }

  small:hover{
    cursor: pointer;
    box-shadow: 1px 1px 10px 1px black ;
  }
`;

// Paragraph Style
export const Paragraph = styled.p`
  :hover {
    cursor: pointer;
    background-color: #d23;
  }

`;
