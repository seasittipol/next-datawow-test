"use client";
import React, { createContext, ReactNode, useState } from "react";
import validate_register from "../validations/validate_register";
import { RegisterType } from "../types/type";
import { register } from "../apis/auth";

const initailRegister: RegisterType = {
  username: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  email: "",
};

interface AuthContextType {
  registerForm: RegisterType;
  handleForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errorHandler: RegisterType;
}
const defaultValue: AuthContextType = {
  registerForm: initailRegister,
  handleForm: () => {},
  handleSubmit: () => {},
  errorHandler: initailRegister,
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [registerForm, setRegisterForm] = useState(initailRegister);
  const [errorHandler, setErrorHandler] = useState(initailRegister);
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prevRegister) => ({ ...prevRegister, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const errors = validate_register(registerForm);
      if (Object.values(errors).join("") === "") {
        const { confirmPassword, ...result } = registerForm;
        const response = await register(result);
        console.log(response);
        console.log("111");
        window.location.replace("/auth/login");
      }
      setErrorHandler(errors);
    } catch (err) {
      console.log(err);
    }
  };
  const contextValue = { registerForm, handleForm, handleSubmit, errorHandler };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
