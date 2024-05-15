"user client";
import useAuth from "@/app/hooks/useAuth";
import React, { useState } from "react";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
}

// const initailRegister = {
//   username: "",
//   firstName: "",
//   lastName: "",
//   password: "",
//   confirmPassword: "",
//   email: "",
// };

export default function InputAuth(props: Props) {
  const { register, handleForm } = useAuth();
  const { name, type, placeholder, value } = props;
  // const [register, setRegister] = useState(initailRegister);
  // const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setRegister((prevRegister) => ({ ...prevRegister, [name]: value }));
  // };
  return (
    <input
      className="p-2 rounded"
      name={name}
      type={type}
      placeholder={placeholder}
      value={
        value === "username"
          ? register.username
          : value === "firstName"
          ? register.firstName
          : value === "lastName"
          ? register.lastName
          : value === "password"
          ? register.password
          : value === "confirmPassword"
          ? register.confirmPassword
          : register.email
      }
      onChange={handleForm}
    />
  );
}
