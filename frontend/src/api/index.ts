import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3333',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzMwMDQ3NDIsImV4cCI6MTYzMzA5MTE0Miwic3ViIjoiMTIzNCJ9.IKd3b_7XIndH_Jn1zxVlpxgIErMeFjDKzRCIUA_FnNU`,
  },
});

export default api;
