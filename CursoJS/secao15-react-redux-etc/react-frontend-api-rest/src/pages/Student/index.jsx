// Global Imports
import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { useParams, useNavigate } from 'react-router-dom';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

// Local imports
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Student() {
  // hooks and vars *
  const [name, setName] = useState('');
  const [middleName, setMiddlename] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const id = get(useParams(), 'id', 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // without id, return
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        // fetching the data, from the DB 💬
        const { data } = await axios.get(`/alunos/${id}`);
        const photo = get(data, 'Photos[0].url', '');

        // Setting the states 💬
        setName(data.nome);
        setMiddlename(data.sobrenome);
        setEmail(data.email);
        setAge(data.idade);
        setWeight(data.peso);
        setHeight(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) {
          errors.map((error) => toast.error(error));
          navigate('/');
        }
      }
    }

    getData();
    // depends
  }, [id, navigate]);

  // Function to handle submit for the form 💬
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    // Validating the form, for the front-end 💬
    if (name.length < 3 || name.length > 255) {
      toast.error('Name must be between 3 and 255 characters');
      formErrors = true;
    }
    if (middleName.length < 3 || middleName.length > 255) {
      toast.error('Middle Name must be between 3 and 255 characters');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('invalid Email ');
      formErrors = true;
    }

    if (!isInt(String(age))) {
      toast.error('invalid Age');
      formErrors = true;
    }

    if (!isFloat(String(weight))) {
      toast.error('invalid Weight');
      formErrors = true;
    }

    if (!isFloat(String(height))) {
      toast.error('invalid Height');
      formErrors = true;
    }

    if (formErrors) return;
    // Form validation ends here 💬

    try {
      setIsLoading(true);
      // If has ID, then edit the actual student 💬
      // If not has a ID, then create a student 💬

      if (id) {
        // Editing 💬
        await axios.put(`/alunos/${id}`, {
          nome: name,
          sobrenome: middleName,
          email,
          idade: age,
          peso: weight,
          altura: height,
        });

        toast.success('Student Edited with success!');
      } else {
        // Creating 💬
        const { data } = await axios.post(`/alunos/`, {
          nome: name,
          sobrenome: middleName,
          email,
          idade: age,
          peso: weight,
          altura: height,
        });
        // When created student with success, redirect for the edit page 💬
        // For the created user 💬
        toast.success('Student created with success!');
        navigate(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      // If has errors, from the api, show then
      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Unknown error');
      }
      // If the JWT token is invalid, delete then;
      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edit Student' : 'New Student'}</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </label>

        <label htmlFor="middleName">
          Middlename:
          <input
            type="text"
            value={middleName}
            onChange={(e) => setMiddlename(e.target.value)}
            placeholder="Middlename"
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

        <label htmlFor="age">
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
        </label>

        <label htmlFor="weight">
          Weight:
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
          />
        </label>

        <label htmlFor="height">
          Height:
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
          />
        </label>

        <button type="submit">{id ? 'Edit Student' : 'New Student'}</button>
      </Form>
    </Container>
  );
}
