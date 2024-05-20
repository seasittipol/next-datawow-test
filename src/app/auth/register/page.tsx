"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import InputAuth from "@/app/components/InputAuth";
import useAuth from "@/app/hooks/useAuth";

export default function Register() {
  const { handleSubmitRegister, errorHandler } = useAuth();
  const { authUser }: any = useAuth();

  useEffect(() => {
    if (authUser) {
      window.location.replace("/home");
    }
  }, []);

  return (
    <div className="w-full h-full sm:h-screen flex flex-col-reverse gap-10 sm:flex-row sm:justify-center sm:items-center bg-major">
      <form
        onSubmit={handleSubmitRegister}
        className="sm:w-3/5 sm:p-36 justify-center flex"
      >
        <div className="flex flex-col text-black w-96">
          <div className="text-white">Register</div>
          <InputAuth
            name="username"
            type="text"
            placeholder="Username"
            value="username"
          />
          <label className="font-light text-red-500">
            {errorHandler.username}
          </label>
          <InputAuth
            name="firstName"
            type="text"
            placeholder="First name"
            value="firstName"
          />
          <label className="font-light text-red-500">
            {errorHandler.firstName}
          </label>
          <InputAuth
            name="lastName"
            type="text"
            placeholder="Last name"
            value="lastName"
          />
          <label className="font-light text-red-500">
            {errorHandler.lastName}
          </label>
          <InputAuth
            name="password"
            type="password"
            placeholder="Password"
            value="password"
          />
          <label className="font-light text-red-500">
            {errorHandler.password}
          </label>
          <InputAuth
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value="confirmPassword"
          />
          <label className="font-light text-red-500">
            {errorHandler.confirmPassword}
          </label>
          <InputAuth
            name="email"
            type="text"
            placeholder="Email"
            value="email"
          />
          <label className="font-light text-red-500">
            {errorHandler.email}
          </label>
          <button className="bg-success text-white rounded p-2 mt-2">
            Submit
          </button>
          <Link
            className="text-white underline w-full text-right"
            href="/auth/login"
          >
            Login
          </Link>
        </div>
      </form>
      <div className="h-96 sm:h-full sm:w-2/5 bg-minor flex flex-col justify-center items-center rounded-b-3xl sm:rounded-l-3xl">
        <img
          className="w-64  sm:w-96"
          src="https://s3-alpha-sig.figma.com/img/0fbc/43f4/9761bea793b24e9f6af1620580a39d2f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ColmJFh8KLnt-kqgVjkg0e0Nke2LTBecif94kpOoBqv1h-YvIVvHKAjmz2mdYitDfglw6kN7iphmpLnlEtLV5RxXHGh9fPRpNpVU7mtxp4wyYE55qJGbP1bjwQQ52HtN6kkOY33OmhBvBn742LgR9YIJpyPuPp0q0apkE-b6vgjPQ7SF8Rp1H7n8M9r38HIL-gSczuvlk9y1x5WJsM1qZlLH270KavnHBLP6Cx1PbHajdiSeFOUh7895NjEfXGUhQs-31GNfFQ1Z2cfrZSiWzRlPacimPtidnGXIHmPQh-Vn2LSaStstY3cfeVBBtoDcvfzCtW5IeFBbjeFlDC~A7w__"
        />
        a Board
      </div>
    </div>
  );
}
