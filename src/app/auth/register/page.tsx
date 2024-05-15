"use client";
import React, { useState } from "react";
import Link from "next/link";
import InputAuth from "@/app/components/InputAuth";
import useAuth from "@/app/hooks/useAuth";

export default function Register() {
  const { handleSubmit } = useAuth();

  return (
    <div className="w-full h-screen flex justify-center  items-center bg-green-700">
      <form onSubmit={handleSubmit} className="w-3/5 p-36 justify-center flex">
        <div className="flex flex-col gap-2 text-black w-96">
          <div className="text-white">Register</div>
          <InputAuth
            name="username"
            type="text"
            placeholder="Username"
            value="username"
          />
          <InputAuth
            name="firstName"
            type="text"
            placeholder="First name"
            value="firstName"
          />
          <InputAuth
            name="lastName"
            type="text"
            placeholder="Last name"
            value="lastName"
          />
          <InputAuth
            name="password"
            type="password"
            placeholder="Password"
            value="password"
          />
          <InputAuth
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value="confirmPassword"
          />
          <InputAuth
            name="email"
            type="text"
            placeholder="Email"
            value="email"
          />
          <button className="bg-green-500 rounded p-2">Submit</button>
        </div>
      </form>
      <div className="h-full w-2/5 bg-green-500 flex flex-col justify-center items-center rounded-l-3xl">
        <img
          className="w-96"
          src="https://s3-alpha-sig.figma.com/img/0fbc/43f4/9761bea793b24e9f6af1620580a39d2f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ColmJFh8KLnt-kqgVjkg0e0Nke2LTBecif94kpOoBqv1h-YvIVvHKAjmz2mdYitDfglw6kN7iphmpLnlEtLV5RxXHGh9fPRpNpVU7mtxp4wyYE55qJGbP1bjwQQ52HtN6kkOY33OmhBvBn742LgR9YIJpyPuPp0q0apkE-b6vgjPQ7SF8Rp1H7n8M9r38HIL-gSczuvlk9y1x5WJsM1qZlLH270KavnHBLP6Cx1PbHajdiSeFOUh7895NjEfXGUhQs-31GNfFQ1Z2cfrZSiWzRlPacimPtidnGXIHmPQh-Vn2LSaStstY3cfeVBBtoDcvfzCtW5IeFBbjeFlDC~A7w__"
        />
        a Board
      </div>
    </div>
  );
}
