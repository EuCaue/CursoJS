// Auth saga module file 💬

// Global Import 💬
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

// Local Import 💬
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    // calling the function, for post with axios, in /tokens, and the payload 💬
    const response = yield call(axios.post, '/tokens', payload);

    // calling the loginSuccess function, passing the data of response. 💬
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Logged in');

    // set the defaults headers for the authorization, for the API, with the token; 💬
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  } catch (e) {
    toast.error('Email or password is Invalid ');
    // if an error occurs, call loginFailure. 💬
    yield put(actions.loginFailure());
  }
}

// Function to persist the token, for all routes in the site. 💬
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// Exporting 'all'; 💬
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
