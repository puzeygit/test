import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'http://localhost:7070/api/services/',
});

export const getServicesRequest = async () => {
  const response = await postsApi.get('');
  return response.data;
}

export const getDetailRequest = async (id: string) => {
  const response = await postsApi.get(id);
  return response.data;
}
