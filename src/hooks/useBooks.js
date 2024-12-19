import useSWR from "swr";
import { apiGetBooks } from "../services/book";

const fetcher = async (url) => await apiGetBooks();

export const useBooks = () => {
  const {
    data: books,
    error,
    isLoading,
    mutate: getBooks,
  } = useSWR("/api/books", fetcher);

  return {
    books,
    error,
    isLoading: !error && !books,
    getBooks,
  };
};
