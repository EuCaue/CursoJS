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

    dispatch(exampleAction.buttonClickedRequest());
  }

  return (
    <Container>
      <Title>Login</Title>
      <Paragraph>Sample Text </Paragraph>
      <button
        type="submit"
        onClick={handleClick}
        style={{ margin: '20px 0px 0px 105px' }}
      >
        Enviar
      </button>
    </Container>
  );
}
