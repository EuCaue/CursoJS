/* eslint-disable no-undef */
// Global Import 💬
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

// Local Imports 💬
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { StudentContainer, ProfilePicture } from './styled';
import Loading from '../../components/Loading';

export default function Students() {
  // useState for students 💬
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Getting the students data from the API 💬
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setStudents(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
    toast.info('Click again, to confirm');
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setStudents(newStudents);
      setIsLoading(false);
    } catch (err) {
      // const errors = get('err', 'response.data.errors', []);
      // errors.map((error) => toast.error(error));

      const status = get(err, 'response.status', 0);
      if (status === 401) {
        toast.error('You need to login');
      } else {
        toast.error('Error an ocurred a delete student');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      {/* loading  status */}
      <Loading isLoading={isLoading} />
      <h1>Students</h1>
      <StudentContainer>
        {/* Map for get the student, and display: Photo, Name, email, table like 💬 */}
        {students.map((student, index) => (
          <div key={String(student.id)}>
            {/* Picture  */}
            <ProfilePicture>
              {get(student, 'Photos[0].url', false) ? (
                <img src={student.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{student.nome}</span>
            <span>{student.email}</span>

            {/* Edit icon 💬 */}
            <Link
              to={`aluno/${student.id}/edit
            `}
            >
              <FaEdit size={16} />
            </Link>

            {/* Delete Icon 💬 */}
            <Link
              onClick={(e) => handleDeleteAsk(e)}
              to={`/aluno/${student.id}/delete`}
            >
              <FaWindowClose size={16} />
            </Link>
            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, student.id, index)}
            />
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
