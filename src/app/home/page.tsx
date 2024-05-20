"use client";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Search } from "lucide-react";
import Blog from "../components/Blog";
import { toast } from "react-toastify";
import { findAllPostsApi } from "../apis/post";
import { Posts } from "../types/type";
import Link from "next/link";

export default function homeeeeee() {
  const [posts, setPosts] = useState([]);
  const findAllPosts = async () => {
    try {
      const response = await findAllPostsApi();
      if (response) {
        setPosts(response.data);
      }
    } catch (err: any) {
      toast.error(err?.response.data.message);
    }
  };

  useEffect(() => {
    findAllPosts();
  }, []);

  console.log(posts);
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
        {posts.map((post: Posts) => (
          <Link href={`/posts/${post.id}`}>
            <Blog
              title={post.title}
              body={post.body}
              category={post.category}
              user={post.user}
              comment={post._count}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
