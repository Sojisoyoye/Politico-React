import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://app-politico.herokuapp.com/api/v1/'
});

export default class Util {
  static makeRequest(url, options = { method: 'GET' }) {
    return apiInstance({
      url,
      method: options.method,
      data: options.body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    }).then(response => response.data);
  }
}
