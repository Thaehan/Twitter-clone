import axios from 'axios';

export const url = 'http://10.0.2.2:8080/';

export const getUser = () => {
  return axios.get(`${url}user/`);
};

export const createUser = (username, password) => {
  return axios.post(`${url}user/`, {
    username: username,
    password: password,
  });
};
