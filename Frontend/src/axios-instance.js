import axios from 'axios';

const apiURL = process.env.REACT_APP_BACKEND;
console.log('url', apiURL);
const instance = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
