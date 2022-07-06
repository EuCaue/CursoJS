// Global Import
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

// Local Import
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  // use*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // arrow function to handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    // Frontend validation // Email && password 💬
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid email!');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Invalid Password');
    }

    if (formErrors) return;

    // dispatch a loginRequest, sendo email and password
    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <Container>
      <h1>Login Page</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>

        <button type="submit">Sign In</button>
      </Form>
    </Container>
  );
}
