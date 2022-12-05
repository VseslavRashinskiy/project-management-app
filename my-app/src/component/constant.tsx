import axios from 'axios';
export const __baseUrl__ = 'https://final-task-backend-production-5b36.up.railway.app/';

export const mainState = [
  {
    title: 'Project Management Application',
    discription:
      'App is an application for collaborative work on tasks. Our app helps to increase productivity thanks to its extensive functionality. Enjoy your work!',
    signUp: 'Sign Up',
    logIn: 'Log in',
    logErr: 'Incorrect login or password',
    logQ: "Don't have an account? Sign Up",
    notFound: '404 Page not found',
    home: 'Home',
    regOk: 'Registration was successful',
    regErr: 'Login already exist',
    regQ: 'Registered? Sign in',
    reg: 'Registration',
    editProfile: 'Edit profile',
    profileUpdate: 'Profile update',
    profileUpdateOk: 'Profile has been updated!',
    deleteProfile: 'Delete profile',
    deleteProfileQ: 'Are you sure you want to delete?',
    signOut: 'Sign Out',
    update: 'Update',
    name: 'Name',
    email: 'Email Address',
    password: 'Password',
  },
  {
    title: 'Приложение для управления проектами',
    discription:
      'App - это приложение для совместной работы над задачами. Наше приложение помогает повысить производительность труда благодаря своей широкой функциональности. Наслаждайтесь своей работой!',
    signUp: 'Зарегистрироваться',
    logIn: 'Войти',
    logErr: 'Неправильный логин или пароль',
    logQ: 'У вас нет учетной записи? Зарегистрируйтесь',
    notFound: '404 Страница не найдена',
    home: 'Главная',
    regOk: 'Регистрация прошла успешно',
    regErr: 'Логин уже существует',
    regQ: 'Зарегистрированы? Войдите',
    reg: 'Регистрация',
    editProfile: 'Редактировать профиль',
    profileUpdate: 'Обновление профиля',
    profileUpdateOk: 'Профиль был обновлен!',
    deleteProfile: 'Удалить профиль',
    deleteProfileQ: 'Вы уверены, что хотите удалить?',
    signOut: 'Выйти',
    update: 'Обновить',
    name: 'Имя',
    email: 'Адрес электронной почты',
    password: 'Пароль',
  },
];

export const userId = localStorage.getItem('idUser');
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

export type Language = {
  language: string;
};
