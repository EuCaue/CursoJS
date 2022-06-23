// Home Page

// Imports
import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Seja bem vindo <FaSmile />
      </Title>
    </Container>
  );
}
