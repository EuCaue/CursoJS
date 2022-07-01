/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

// Example req, for tests 💬
const req = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

// Example request for the tests 💬
function* exampleRequest() {
  try {
    yield call(req);
    toast.success('Deu certo ai mlk');
    yield put(actions.buttonClickedSucess());
  } catch {
    toast.error('Deu errado ai mlk');
    yield put(actions.buttonClickedFailure());
  }
}

export default all([takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest)]);
