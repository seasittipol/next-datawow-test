import axiosInstance from "../config/axiosInstance";
import { Comments } from "../types/type";

export const createComment = (comment: Comments) =>
  axiosInstance.post("/comments", comment);

export const updateComment = (id: number, comment: Comments) =>
  axiosInstance.patch(`/comments/${id}`, comment);

export const deleteComment = (id: number) =>
  axiosInstance.delete(`/comments/${id}`);

export const findCommentWithPostId = (postId: number) =>
  axiosInstance.get(`/comment/${postId}`);
