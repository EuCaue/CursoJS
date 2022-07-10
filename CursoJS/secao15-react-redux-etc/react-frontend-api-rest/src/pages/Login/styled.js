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
    /* width: 25%; */
    width: fit-content;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;

    &:focus {
      border-color: ${colors.primaryColor}

    }

  }
    label {
        display: flex;
        justify-content: center;
        margin: auto;
        cursor: text;
        &::selection {
          background-color: ${colors.primaryDarkColor};
          color: #fff
        }
    }

    label + label {
      margin: 0px 5px 1px 25px;
    }

  button  {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-left: 35%;
  }
`;
