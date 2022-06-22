import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { StylePage404 } from './styled';

export default function Page404() {
  return (
    <Container
      style={{
        background: '#dbc5bd',
      }}
    >
      <StylePage404>
        <FaTimesCircle className="arrowDown" />
        404 - Page not found
        <FaTimesCircle className="arrowDown arrowDownRight" />
      </StylePage404>
    </Container>
  );
}
