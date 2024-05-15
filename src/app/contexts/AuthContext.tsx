"use client";
import React, { createContext, ReactNode, useState } from "react";

interface RegisterType {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const initailRegister: RegisterType = {
  username: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  email: "",
};

interface AuthContextType {
  register: RegisterType;
  handleForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const defaultValue: AuthContextType = {
  register: initailRegister,
  handleForm: () => {},
  handleSubmit: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [register, setRegister] = useState(initailRegister);
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister((prevRegister) => ({ ...prevRegister, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(register);
  };
  const contextValue = { register, handleForm, handleSubmit };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
