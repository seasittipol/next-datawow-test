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

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  image: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Posts {
  id?: number;
  title?: string;
  body?: string;
  userId: number;
  category?: string;
  user?: User;
  _count?: Count;
}

interface Count {
  Comments: number;
}

export interface Comments {
  description: string;
  userId?: number;
  postId?: number;
}
