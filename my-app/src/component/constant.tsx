import axios from 'axios';
export const __baseUrl__ = 'https://final-task-backend-production-5b36.up.railway.app/';
// export const __baseUrl__ = 'http://localhost:3000/';
export const userId = localStorage.getItem('idUser');

export const mainState = [
  {
    title: 'Приложение для управления проектами',
    discription:
      'App - это приложение для совместной работы над задачами. Наше приложение способствует увелечению производительности блягодаря обширному функционалу. Приятной работы!',
  },
];

const token = localStorage.getItem('tokenUser');
export const axiosApiInstance = axios.create();
axiosApiInstance.interceptors.request.use(
  async (config) => {
    if (token) {
      const keys = JSON.parse(token);
      config.headers = {
        Authorization: `Bearer ${keys}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
