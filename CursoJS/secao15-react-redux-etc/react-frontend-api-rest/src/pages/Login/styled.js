import styled from 'styled-components';
// styled-component for style in the Login Page

// h1 style
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
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

text-align: center;

  :hover {
    cursor: pointer;
  }

`;
