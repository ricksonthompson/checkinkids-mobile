import axios from 'axios';

export const api = axios.create({
  baseURL: "http://188.166.19.133:3001",
});
