import axios from 'axios';
import { ADD_USER } from './types';

const instance = axios.create({
  baseURL: 'https://app-politico.herokuapp.com/api/v1/auth'
});

export const addUser = userData => dispatch => {
  instance.post('/signup', userData).then(res => {
    const { token } = res.data.data[0];
    const { user } = res.data.data[0].user;
    localStorage.setItem('token', token);
    dispatch({
      type: ADD_USER,
      payload: user
    });
  });
};

// http://localhost:3000/api/v1/auth/login

// https://app-politico.herokuapp.com/api/v1/auth
