// The Login Page
import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Olá mundão</small>
      </Title>
      <Paragraph>Paragŕafo mesmo</Paragraph>
    </Container>
  );
}
