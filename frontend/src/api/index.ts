import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3333',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzM5MDUzMDMsImV4cCI6MTYzMzk5MTcwMywic3ViIjoiMTIzNCJ9.2wjXwQTlGgWIfxkD0pZ85iUJnw8YARcq6BW5tJLBiD8`,
  },
});

export default api;
