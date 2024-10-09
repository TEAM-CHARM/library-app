import { apiClient } from "./config";

export const apiAddAuthor = async (payload) => {
  return await apiClient.post(`/author`, payload);
};

export const apiGetAuthors = async () => {
  return await apiClient.get("/author");
};

export const apiGetAuthor = async (id) => {
  return await apiClient.get(`/author/${id}`);
};

export const apiUpdateAuthor = async (id, payload) =>{
    return await apiClient.patch(`/author/${id}`, payload)
}

export const apiDeleteAuthor  = async (id) =>{
    return await apiClient.delete(`/author/${id}`)
}