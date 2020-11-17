import httpService from "./httpService";
import store from "../store/store";
import { addUser, removeUser } from "../store/reducers/user";

// const baseUrl = "http://localhost:4000";
const tokenKey = "token";

export const register = async (data) => {
  try {
    return await httpService.post(`/auth/register`, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const login = async (data) => {
  try {
    const { data: response } = await httpService.post(`/auth/login`, data);
    setToken(response.token);
    return await getUserInfos(response.token);
  } catch (error) {
    console.log(error.response.data);
    return Promise.reject(error);
  }
};

export const getUserInfos = async () => {
  const token = getToken();
  try {
    const { data: user } = await httpService.get(`/auth/me`, {
      headers: {
        "x-auth-token": token,
      },
    });
    store.dispatch(addUser({ user }));
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logout = async () => {
  try {
    await httpService.delete(`/auth/logout`);
    localStorage.removeItem(tokenKey);
    store.dispatch(removeUser());
  } catch (error) {
    return Promise.reject(error);
  }
};

export const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

export const getToken = () => {
  return localStorage.getItem(tokenKey);
};

export const userIsLogedin = () => {
  return getToken() ? true : false;
};

httpService.setToken(getToken());
