import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;

  input {
    margin-bottom: 20px;
    margin-left: 10px;
    height: 40px;
    width: 25%;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;

    &:focus {
      border-color: ${colors.primaryColor}
    }

  }
    label {
        cursor: text;

        &::selection {
          background-color: ${colors.primaryDarkColor};
          color: #fff
        }
    }

  button  {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-left: 35%;
  }
`;
