import PageHeader from "../components/PageHeader";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import K from "../../../constants";
import { useEffect, useState } from "react";
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
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("list");
  const [openAddBook, setOpenAddBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [bookChange, setBookChange] = useState(false);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await apiGetBooks();
      console.log(res);
      if (res.status === 200) {
        console.log("Books--->", res.data);
        setBooks(res.data);
      }
    } catch (error) {
      toast.error("Error fetching books");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchAuthors = async () => {
    try {
      setLoading(true);
      const res = await apiGetAuthors();
      console.log(res);
      if (res.status === 200) {
        console.log("Authors--->", res.data);
        setAuthors(res.data);
      }
    } catch (error) {
      toast.error("Error fetching authors");
      console.log(error);
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
    // setBooks(K.BOOKS);
  }, [bookChange === true]);

  const handleAddOrEditBook = async (book) => {
    try {
      setLoading(true);
      console.log("Book added", book);
    } catch (error) {
      console.log("Error adding book", error);
      toast.error("Error adding book");
    } finally {
      setLoading(false);
    }
  };

  const handleEditBook = async (book) => {
    try {
      setLoading(true);
      console.log("Book Edited", book);
    } catch (error) {
      toast.error("Error updating book!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteBook = async (book) => {
    try {
      setLoading(true);
      const res = await apiDeleteBook(book._id);
      fetchData();
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error("Error deleting book!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHeader
        title="Books"
        searchPlaceholder="Search books, authors, categories..."
        buttonText="Add Book"
        buttonIcon={<BiSolidBookAdd />}
        onClick={() => setOpenAddBook(true)}
      />

      <div className="flex justify-end align-middle items-center pr-10 mb-8">
        <div className="bg-white flex  rounded-3xl ">
          <button
            className={`p-4 py-2 border-r flex align-middle items-center rounded-l-3xl gap-2 ${
              view === "list" && "bg-gray-700 text-white"
            }`}
            onClick={() => setView("list")}
          >
            <FaList />
            <span>list</span>
          </button>
          <button
            className={`p-4 py-2  border-l rounded-r-3xl flex align-middle items-center gap-2 ${
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
            books={books}
            handleDeleteBook={handleDeleteBook}
            handleEditBook={handleAddOrEditBook}
            setSelectedBook={setSelectedBook}
            setOpenAddBook={setOpenAddBook}
          />
        )
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {books?.map((book, index) => {
            return (
              <Link key={index} to={book.isbn}>
                <BookCard book={book} />
              </Link>
            );
          })}
        </div>
      )}

      <AddOrEditBook
        authors={authors && authors}
        open={openAddBook}
        book={selectedBook}
        handleSubmit={handleAddOrEditBook}
        closeModal={() => {
          setSelectedBook({});
          setOpenAddBook(false);
        }}
        setBookChange={setBookChange}
      />
    </div>
  );
};

export default Books;
