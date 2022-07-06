// Global imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

// Local Imports
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';

export default function Register() {
  // Vars || use*() 💬
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle submit 💬
  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    // Frontend validation // Name && email && password 💬
    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Name must be 3 a 255 characters');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email invalid!');
    }
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Password must be 3 a 255 characters');
    }

    if (formErrors) return;

    // try catch to for complete register 💬
    try {
      // if sucess, send a notification and redirect for the login page 💬
      await axios.post('/users/', {
        nome: name,
        password,
        email,
      });
      toast.success('Register completed!');
      navigate('/login');
    } catch (err) {
      // if err catch the errors, and send a notification 💬
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Create account</h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* Labels for the inputs */}
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
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

        {/* button */}
        <button type="submit">Sign up</button>
      </Form>
    </Container>
  );
}
