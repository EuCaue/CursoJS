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

// Function to deal with the registerRequest and the change account data
// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  // data of the payload
  const { id, nome, email, password } = payload;

  try {
    // if user is loggedIn, changing account information
    if (id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Account successfully changed!');
      yield put(actions.registerUpdatedSuccess({ id, nome, email }));
    } else {
      // if the user is registering
      yield call(axios.post, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Account created with success!');
      yield put(actions.registerCreatedSuccess({ id, nome, email }));
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', '');
    // if 401 error
    if (status === 401) {
      toast.info('You need to login again!');
      return yield put(actions.loginFailure());
    }
    // if has any errors from the api
    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Unknown error');
    }

    yield put(actions.registerFailure());
  }
}

// Exporting 'all'; 💬
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
