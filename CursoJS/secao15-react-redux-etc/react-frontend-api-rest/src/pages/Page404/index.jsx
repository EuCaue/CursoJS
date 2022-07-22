// Page404 for all Not found pages 💬

// Global Imports💬
import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

// Local Imports 💬
import { Container } from '../../styles/GlobalStyles';
import { StylePage404 } from './styled';

export default function Page404() {
  return (
    // Using container and StylePage404 components
    <Container
      style={{
        background: '#dbc5bd',
      }}
    >
      <StylePage404>
        <FaTimesCircle className="timesCircle" />
        404 - Page not found
        <FaTimesCircle className="timesCircle timesCircleRight" />
      </StylePage404>
    </Container>
  );
}
