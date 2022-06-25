/* eslint-disable no-console */
// The Login Page
import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
// import axios from '../../services/axios';

export default function Login() {
  // React.useEffect(() => {
  //   async function getDate() {
  //     const response = await axios.get('/alunos');
  //     const { data } = response;
  //     console.log(data);
  //   }
  //   getDate();
  // }, []);

  return (
    <Container>
      <Title>
        Login
        <small>Olá mundão</small>
      </Title>
      <Paragraph>Paragŕafo mesmo</Paragraph>
      <button type="submit">Enviar</button>
    </Container>
  );
}
