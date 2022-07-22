// Global Import 💬
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Local Import 💬
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login() {
  // Hooks  💬
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // function to handle the submit 💬
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

    // dispatch a loginRequest, sending email, password and the navigate hook as a payload for redux-saga 💬
    dispatch(actions.loginRequest({ email, password, navigate: navigate(-1) }));
  };

  return (
    // Form for the login page 💬
    <Container>
      {/* loading  status */}
      <Loading isLoading={isLoading} />
      <h1>Login Page</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* Email Input 💬 */}
        <label htmlFor="email">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>

        {/* Password Input 💬 */}
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
