/* eslint-disable no-console */
// The Login Page
import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import * as exampleAction from '../../store/modules/examples/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleAction.clickButton());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Olá mundão</small>
      </Title>
      <Paragraph>Paragŕafo mesmo</Paragraph>
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
