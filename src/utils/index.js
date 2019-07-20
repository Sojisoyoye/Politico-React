import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://app-politico.herokuapp.com/api/v1'
});

export default class Util {
  static reqProcess(url, options = { method: 'GET' }) {
    return instance({
      url,
      method: options.method,
      data: options.body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    }).then(response => response.data);
  }
}
