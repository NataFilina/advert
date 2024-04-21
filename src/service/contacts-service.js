import axios from 'axios';

axios.defaults.baseURL = 'https://65a65c7374cf4207b4efd636.mockapi.io/';

export const getCarsList = async () => {
  const result = await axios.get('/adverts');
  return result.data;
};

export const getCar = async id => {
  const result = await axios.get(`/adverts/${id}`);
  return result.data;
};
