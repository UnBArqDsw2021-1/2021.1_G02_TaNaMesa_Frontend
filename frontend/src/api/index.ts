import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3333',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzMxOTcwMzMsImV4cCI6MTYzMzI4MzQzMywic3ViIjoiMTIzNCJ9.dJat-m_yYiSttOnYV43IhLrbCCFjFrFx4mVZVa-Cct0`,
  },
});

export default api;
