import React from 'react';
import { useNavigate } from 'react-router-dom';
// import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  const Navigate = useNavigate();
  Navigate('/');
  return (
    <Container>
      <h1>404 - Page not found</h1>
    </Container>
  );
}
