import { apiClient } from "./config";

export const apiAddBook = async (payload) => {
  return await apiClient.post(`/books`, payload);
};

export const apiGetBooks = async () => {
  return await apiClient.get("/books");
};

export const apiGetBook = async (id) => {
  return await apiClient.get(`/books/${id}`);
};

export const apiUpdateBook = async (id, payload) =>{
    return await apiClient.patch(`/books/${id}`, payload)
}

export const apiDeleteBook  = async (id) =>{
    return await apiClient.delete(`/books/${id}`)
}