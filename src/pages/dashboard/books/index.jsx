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
import { apiGetBooks } from "../../../services/book";
import TableSkeleton from "../components/TableSkeleton";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("list");

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

  useEffect(() => {
    fetchBooks();
    // setBooks(K.BOOKS);
  }, []);

  const handleBookAdd = async () => {
    console.log("Add book button clicked");
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
      console.log("book deleted", book);
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
        onClick={handleBookAdd}
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
            handleEditBook={handleEditBook}
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
    </div>
  );
};

export default Books;
