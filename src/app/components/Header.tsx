"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";

export default function Header() {
  const router = useRouter();
  return (
    <div className="bg-major h-[60px] flex justify-between items-center px-8">
      <div>a board</div>
      <Button onClick={() => router.push("/auth/register")}>Sign In</Button>
    </div>
  );
}
