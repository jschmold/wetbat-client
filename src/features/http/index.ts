import axios from 'axios';

export function useHttpClient() {
  return axios;
}

export function useAPIClient() {
  const baseURL = process.env.apiURL ?? 'http://localhost:4200';
  return axios.create({ baseURL });
}
