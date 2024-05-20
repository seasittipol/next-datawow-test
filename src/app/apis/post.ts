import axiosInstance from "../config/axiosInstance";
import { Posts } from "../types/type";

export const findAllPostsApi = () => axiosInstance.get("/posts");

export const findOnePostWithIdApi = (id: number) =>
  axiosInstance.get(`/posts/${id}`);

export const findPostsWithUserIdApi = (userId: number) =>
  axiosInstance.get(`/posts/user/${userId}`);

export const createPostApi = (content: Posts) =>
  axiosInstance.post("/posts", content);

export const updatePostWithIdApi = (id: number, content: Posts) =>
  axiosInstance.patch(`/posts/${id}`, content);

export const deletePostWithIdApi = (id: number) =>
  axiosInstance.delete(`/posts/${id}`);
