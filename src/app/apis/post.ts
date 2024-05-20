import axiosInstance from "../config/axiosInstance";

export const findAllPosts = () => axiosInstance.get("/posts");

export const findOnePostWithId = (id: number) =>
  axiosInstance.get(`/posts/${id}`);

export const createPost = (content) => axiosInstance.post("/posts", content);

export const updatePostWithId = (id: number, content) =>
  axiosInstance.post(`/posts/${id}`, content);

export const deletePostWithId = (id: number) =>
  axiosInstance.delete(`/posts/${id}`);
