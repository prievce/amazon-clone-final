import axios from 'axios';
import { defineStore } from 'pinia';
import mdlUser from 'src/core/modals/User';

export const useUserStore = defineStore('userStore', () => {
  const Register = async (user: mdlUser) => {
    const response = await axios.post(`http://localhost:5000/api/user/register`,user);
    return response.data;
  };

  const Login = async (user: mdlUser) => {
    const response = await axios.post(`http://localhost:5000/api/user/login`,user);
    return response.data;
  };

  return {
    Register,
    Login,
  };
});
