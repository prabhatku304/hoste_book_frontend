import axios from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_ENV_BASE_UR || 'http://localhost:5000/graphql';

export const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
