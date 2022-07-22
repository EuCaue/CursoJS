// Global Imports 💬
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

// Local Imports 💬
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  // Hooks 💬
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.user.isLoading);

  useEffect(() => {
    if (!id) return;

    setEmail(emailStored);
    setName(nameStored);
  }, [emailStored, id, nameStored]);

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
    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Password must be 3 a 255 characters');
    }

    if (formErrors) return;

    // dispatch a registerRequest, with name,email, password, id, and the navigate hooks as a payload for the redux saga 💬
    dispatch(
      actions.registerRequest({
        nome: name,
        email,
        password,
        id,
        navigate: navigate('/login'),
      }),
    );
  }

  return (
    <Container>
      {/* loading  status */}
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edit account' : 'Create account'}</h1>
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
        <button type="submit">{id ? 'Edit account' : 'Sign Up'}</button>
      </Form>
    </Container>
  );
}
