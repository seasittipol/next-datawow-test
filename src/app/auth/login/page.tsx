"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };
  return (
    <div className="w-full h-screen flex justify-center  items-center bg-major">
      <form onSubmit={handleSubmit} className="w-3/5 p-36 justify-center flex">
        <div className="flex flex-col gap-2 text-black w-96">
          <div className="text-white">Login</div>
          <input
            className="rounded p-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="rounded p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-success text-white rounded p-2">Submit</button>
          <Link
            className="text-white underline w-full text-right"
            href="/auth/register"
          >
            Sign In
          </Link>
        </div>
      </form>
      <div className="h-full w-2/5 bg-minor flex flex-col justify-center items-center rounded-l-3xl">
        <img
          className="w-96"
          src="https://s3-alpha-sig.figma.com/img/0fbc/43f4/9761bea793b24e9f6af1620580a39d2f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ColmJFh8KLnt-kqgVjkg0e0Nke2LTBecif94kpOoBqv1h-YvIVvHKAjmz2mdYitDfglw6kN7iphmpLnlEtLV5RxXHGh9fPRpNpVU7mtxp4wyYE55qJGbP1bjwQQ52HtN6kkOY33OmhBvBn742LgR9YIJpyPuPp0q0apkE-b6vgjPQ7SF8Rp1H7n8M9r38HIL-gSczuvlk9y1x5WJsM1qZlLH270KavnHBLP6Cx1PbHajdiSeFOUh7895NjEfXGUhQs-31GNfFQ1Z2cfrZSiWzRlPacimPtidnGXIHmPQh-Vn2LSaStstY3cfeVBBtoDcvfzCtW5IeFBbjeFlDC~A7w__"
        />
        a Board
      </div>
    </div>
  );
}
