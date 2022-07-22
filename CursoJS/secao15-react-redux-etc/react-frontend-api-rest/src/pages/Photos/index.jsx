// File por the photo edit/post

// Global Imports 💬
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

// Local Imports 💬
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Form } from './styled';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Photos() {
  // Hooks 💬
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = get(useParams(), 'id', ''); // ID

  useEffect(() => {
    // getData from the api, for setState of the  Photo 💬
    const getData = async () => {
      try {
        setIsLoading(true);
        // get 💬
        const { data } = await axios.get(`/alunos/${id}`);
        // Setting the photo 💬
        setPhoto(get(data, 'Photos[0].url', ''));
        setIsLoading(false);
      } catch (err) {
        // If has an error during the loading image, returns to the home page 💬
        toast.error('Error getting the image');
        setIsLoading(false);
        navigate('/');
      }
    };

    getData();
  }, [id, navigate]); // dependencies

  // Function to handle onChange event 💬
  const handleChange = async (event) => {
    // PhotoFile and the URL created with JS 💬
    const photoFile = event.target.files[0];
    const photoURL = URL.createObjectURL(photoFile);

    // Setting the photo 💬
    setPhoto(photoURL);

    // Form Data to send the payload for the api 💬
    const formData = new FormData();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    formData.append('aluno_id', id);
    formData.append('photo', photoFile);

    // Try catch to send the payload to API 💬
    try {
      setIsLoading(true);
      await axios.post(`/photos/`, formData, config);
      toast.success('Foto send with success');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Error sending the image ');
      //  if the http code is 401, the person logout  for safety reasons 💬
      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      {/* isLoading 💬 */}
      <Loading isLoading={isLoading} />
      <h1>Photos</h1>

      {/* Form for the photo */}
      <Form>
        <label htmlFor="photo">
          {/* If the student has a photo, show the photo, if not, show the 'select' text 💬 */}
          {photo ? <img src={photo} alt="Student" /> : 'Select Photo'}
          <input type="file" id="photo" onChange={(e) => handleChange(e)} />
        </label>
      </Form>
    </Container>
  );
}
