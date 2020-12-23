import User from "../dtos/User";
import api from "./api";

interface SignInData {
  email: string;
  password: string;
}

export interface SignInResponse {
  data: User;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const UsersService = {
  signUp: async ({
    name, email, password, password_confirmation
  }: SignUpData) => {
    return await api.post<void>('/auth/v1/user', {
      name, email, password, password_confirmation
    })
  },
  signIn: async ({ email, password }: SignInData) => {
    return await api.post<SignInResponse>('auth/v1/user/sign_in', {
      email,
      password,
    });
  },
};

export default UsersService;
