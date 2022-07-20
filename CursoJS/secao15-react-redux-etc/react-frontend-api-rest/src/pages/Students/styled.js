// Style file for Students Page 💬
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NewStudent = styled(Link)`
  display: block;
  padding: 10px 0;
  text-align: center;
`;

export const StudentContainer = styled.div`
  margin-top: 15px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #ccc

  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
