import { useEffect, useState, useCallback } from "react";
import PageHeader from "../components/PageHeader";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import BooksTable from "./components/BooksTable";
import toast from "react-hot-toast";
import BookCard from "./components/BookCard";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { apiDeleteBook, apiGetBooks } from "../../../services/book";
import TableSkeleton from "../components/TableSkeleton";
import AddOrEditBook from "../../../modals/add-book";
import { apiGetAuthors } from "../../../services/author";

const Books = () => {
  const [books, setBooks] = useState([]); // Current visible books
  const [allBooks, setAllBooks] = useState([]); // Full list of books for restoration
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("list");
  const [openAddBook, setOpenAddBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await apiGetBooks();
      if (res.status === 200) {
        setAllBooks(res.data); // Store full list of books
        setBooks(res.data); // Initialize visible books list
      }
    } catch (error) {
      toast.error("Error fetching books");
    } finally {
      setLoading(false);
    }
  };

  const fetchAuthors = async () => {
    try {
      setLoading(true);
      const res = await apiGetAuthors();
      if (res.status === 200) {
        setAuthors(res.data);
      }
    } catch (error) {
      toast.error("Error fetching authors");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = () => {
    fetchBooks();
    fetchAuthors();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddOrEditBook = async (book) => {
    try {
      setLoading(true);
      // Add or edit book logic here
    } catch (error) {
      toast.error("Error adding book");
    } finally {
      setLoading(false);
    }
  };

  const handleEditBook = async (book) => {
    try {
      setLoading(true);
      // Edit book logic here
    } catch (error) {
      toast.error("Error updating book!");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBook = async (book) => {
    try {
      setLoading(true);
      await apiDeleteBook(book._id);
      fetchData();
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error("Error deleting book!");
    } finally {
      setLoading(false);
    }
  };

  // Debounced function to delay the search execution
  const debouncedSearch = useCallback(
    (callback, delay) => {
      let timer;
      return (...args) => {
        setLoading(true)
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          callback(...args);
          setLoading(false)
        }, delay);
      };
    },
    []
  );

  // Handle the search input change
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    // Debounce search to prevent too many re-renders
    debouncedSearch(() => {
      if (searchValue.trim() === "") {
        // If the search field is cleared, restore the full book list
        setBooks(allBooks);
      } else {
        // Filter books based on the search term
        const filteredBooks = allBooks.filter(
          (book) =>
            book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            // book.author.toLowerCase().includes(searchValue.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchValue.toLowerCase())
        );
        setBooks(filteredBooks);
      }
    }, 1000)(); // 500ms delay for debounce
  };

  return (
    <div>
      <PageHeader
        title="Books"
        searchPlaceholder="Search books, authors, genre..."
        buttonText="Add Book"
        buttonIcon={<BiSolidBookAdd />}
        onClick={() => setOpenAddBook(true)}
        onChange={handleSearch} // Attach the debounced search handler
      />

      <div className="flex justify-end align-middle items-center pr-10 mb-8">
        <div className="bg-white flex rounded-3xl ">
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
        loading ? (
          <TableSkeleton />
        ) : (
          <BooksTable
            books={books} // Render filtered or all books
            handleDeleteBook={handleDeleteBook}
            handleEditBook={handleAddOrEditBook}
            setSelectedBook={setSelectedBook}
            setOpenAddBook={setOpenAddBook}
          />
        )
      ) : (
        <div className="grid grid-cols-4 gap-10 px-16">
          {books?.map((book, index) => (
            <div key={index}>
              <Link to={book._id}>
                <BookCard book={book} />
              </Link>
            </div>
          ))}
        </div>
      )}

      <AddOrEditBook
        authors={authors}
        open={openAddBook}
        book={selectedBook}
        handleSubmit={handleAddOrEditBook}
        closeModal={() => {
          setSelectedBook({});
          setOpenAddBook(false);
        }}
        fetchData={fetchData}
      />
    </div>
  );
};

export default Books;
