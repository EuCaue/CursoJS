// Home Page Testing page, not used 💬
// Use for test or something like that 💬

// Imports
import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Home() {
  toast.success('Olá mundo!');
  toast.error('Hello World!');
  return (
    <Container>
      <Title>
        Welcome <FaSmile />
      </Title>
    </Container>
  );
}
