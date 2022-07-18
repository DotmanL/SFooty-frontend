import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'https://sfootybackend.herokuapp.com/',
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

const users = {
  apiClient,
};

export default users;
