import { useState, useCallback } from "react";
import PageHeader from "../components/PageHeader";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import BooksTable from "./components/BooksTable";
import toast from "react-hot-toast";
import BookCard from "./components/BookCard";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { apiDeleteBook } from "../../../services/book";
import TableSkeleton from "../components/TableSkeleton";
import AddOrEditBook from "../../../modals/add-book";
import { apiGetAuthors } from "../../../services/author";
import { useBooks } from "../../../hooks/useBooks"; // Custom SWR Hook for fetching books
import useSWR from "swr";

const Books = () => {
  const { books, isLoading, error, mutate: fetchBooks } = useBooks(); // Using SWR
  const { data: authors, mutate: fetchAuthors } = useSWR(
    "/api/authors",
    apiGetAuthors
  );
  const [view, setView] = useState("list");
  const [openAddBook, setOpenAddBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddOrEditBook = async (book) => {
    try {
      // Simulate an add/edit request here
      toast.success("Book added/updated successfully");
      fetchBooks(); // Re-fetch books after adding/updating
    } catch (error) {
      toast.error("Error adding/updating book");
    }
  };

  const handleDeleteBook = async (book) => {
    try {
      await apiDeleteBook(book._id);
      fetchBooks(); // Re-fetch books after deletion
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error("Error deleting book!");
    }
  };

  // Debounced function to filter books based on search term
  const debouncedSearch = useCallback((callback, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }, []);

  // Handle the search input change
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    // Debounce search to prevent too many re-renders
    debouncedSearch(() => {
      if (searchValue.trim() === "") {
        fetchBooks(); // Restore the full book list
      } else {
        const filteredBooks = books.filter(
          (book) =>
            book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchValue.toLowerCase())
        );
        fetchBooks(filteredBooks);
      }
    }, 1000)();
  };

  return (
    <div>
      <PageHeader
        title="Books"
        searchPlaceholder="Search books, authors, genre..."
        buttonText="Add Book"
        buttonIcon={<BiSolidBookAdd />}
        onClick={() => setOpenAddBook(true)}
        onChange={handleSearch}
      />

      <div className="flex justify-end align-middle items-center pr-10 mb-8">
        <div className="bg-white flex rounded-3xl">
          <button
            className={`p-4 py-2 border-r flex align-middle items-center rounded-l-3xl gap-2 ${
              view === "list" && "bg-gray-700 text-white"
            }`}
            onClick={() => setView("list")}
          >
            <FaList />
            <span>List</span>
          </button>
          <button
            className={`p-4 py-2 border-l rounded-r-3xl flex align-middle items-center gap-2 ${
              view === "grid" && "bg-gray-700 text-white"
            }`}
            onClick={() => setView("grid")}
          >
            <IoGridOutline />
            <span>Grid</span>
          </button>
        </div>
      </div>

      {view === "list" ? (
        isLoading ? (
          <TableSkeleton />
        ) : (
          books && (
            <BooksTable
              books={books.data} // Render filtered or all books
              handleDeleteBook={handleDeleteBook}
              handleEditBook={handleAddOrEditBook}
              setSelectedBook={setSelectedBook}
              setOpenAddBook={setOpenAddBook}
            />
          )
        )
      ) : (
        <div className="grid grid-cols-4 gap-10 p-16 overflow-hidden">
          {books?.map((book, index) => (
            <div key={index}>
              <Link to={book._id}>
                <BookCard book={book} />
              </Link>
            </div>
          ))}
        </div>
      )}

      {authors && <AddOrEditBook
        authors={authors.data || []}
        open={openAddBook}
        book={selectedBook}
        handleSubmit={handleAddOrEditBook}
        closeModal={() => {
          setSelectedBook({});
          setOpenAddBook(false);
        }}
        fetchData={fetchBooks} // Re-fetch data after book addition/update
      />}
    </div>
  );
};

export default Books;
