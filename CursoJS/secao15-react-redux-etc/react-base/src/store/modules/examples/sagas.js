/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const req = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(req);
    yield put(actions.buttonClickedSucess);
  } catch {
    yield put(actions.buttonClickedFailure);
  }
}

export default all([
  takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest()),
]);
