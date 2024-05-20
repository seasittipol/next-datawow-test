import React from "react";
import Button from "../components/Button";
import { Search } from "lucide-react";
import Blog from "../components/Blog";

export default function homeeeeee() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center justify-between gap-8">
        <div className="flex-1 flex border rounded-md items-center px-2">
          <Search />
          <input className="bg-grey100 outline-none p-2" placeholder="Search" />
        </div>
        <div>dropdown</div>
        <Button>Create +</Button>
      </div>
      <div className="flex flex-col">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}
