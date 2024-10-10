import { apiClient } from "./config";

export const apiAddAuthor = async (payload) => {
  return await apiClient.post(`/author`, payload);
};

export const apiGetAuthors = async () => {
  return await apiClient.get("/authors");
};

export const apiGetAuthor = async (id) => {
  return await apiClient.get(`/authors/${id}`);
};

export const apiUpdateAuthor = async (id, payload) =>{
    return await apiClient.patch(`/authors/${id}`, payload)
}

export const apiDeleteAuthor  = async (id) =>{
    return await apiClient.delete(`/authors/${id}`)
}