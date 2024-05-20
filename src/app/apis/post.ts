import axiosInstance from "../config/axiosInstance";
import { Posts } from "../types/type";

export const findAllPosts = () => axiosInstance.get("/posts");

export const findOnePostWithId = (id: number) =>
  axiosInstance.get(`/posts/${id}`);

export const findPostsWithUserId = (userId: number) =>
  axiosInstance.get(`/posts/user/${userId}`);

export const createPost = (content: Posts) =>
  axiosInstance.post("/posts", content);

export const updatePostWithId = (id: number, content: Posts) =>
  axiosInstance.patch(`/posts/${id}`, content);

export const deletePostWithId = (id: number) =>
  axiosInstance.delete(`/posts/${id}`);
