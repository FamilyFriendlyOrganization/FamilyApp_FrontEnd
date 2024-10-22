import axios from "../utils/axiosCustom";

export const register = (registerObj) => axios.post('auth', registerObj)

export const login = (username, password) => {
    return axios.post('auth/login', {
      username,
      password,
    });
  };

export const updateProfile = (id, updateData) => axios.put(`accounts/${id}`, updateData)