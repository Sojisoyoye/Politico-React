import axios from 'axios';

export const instance = axios.create({
  baseURL: 'api/v1'
});

export default class Util {
  static reqProcess(url, options = { method: 'GET' }) {
    return instance({
      url,
      method: options.method,
      data: options.body,
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => response.data);
  }
}
