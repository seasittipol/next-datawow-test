export interface RegisterType {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface RegisterSendType {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface LoginType {
  username: string;
  password: string;
}
