/* eslint-disable no-undef */
// Global Import 💬
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

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

  return (
    <Container>
      {/* loading  status */}
      <Loading isLoading={isLoading} />
      <h1>Students</h1>
      <StudentContainer>
        {/* Map for get the student, and display: Photo, Name, email, table like 💬 */}
        {students.map((student) => (
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
              to={`
              /aluno/${student.id}/edit
            `}
            >
              <FaEdit size={16} />
            </Link>

            {/* Delete Icon 💬 */}
            <Link
              to={`
              /aluno/${student.id}/delete
            `}
            >
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
