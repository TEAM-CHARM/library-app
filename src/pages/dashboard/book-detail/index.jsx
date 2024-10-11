import React, { useEffect, useState } from "react";
import { apiDeleteBook, apiGetBook } from "../../../services/book";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import PrimaryButton from "../components/PrimaryButton";
import { MdEdit, MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import BookDetailsSkeleton from "../components/BookDetailsSkeleton";
import AddOrEditBook from "../../../modals/add-book";
import { apiGetAuthors } from "../../../services/author";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const [authors, setAuthors] = useState([]);
  const [bookChange, setBookChange] = useState(false);
  const [openEditBook, setOpenEditBook] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchBook = async () => {
    try {
      setLoading(true);
      const res = await apiGetBook(id);
      if (res.status === 200) {
        setBook(res.data);
      }
    } catch (error) {
      console.log("Error fetching book", error);
      toast.error("Error fetching book");
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
    fetchBook();
    fetchAuthors();
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      setLoading(true);

      await apiDeleteBook(book._id);
      navigate("/dashboard/books");
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error("Error deleting book!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <BookDetailsSkeleton />
      ) : (
        <div className="min-h-screen p-6  text-gray-900">
          <div className="flex justify-between items-center align-middle">
            <Link to="/dashboard/books" className="text-primary-dark text-4xl">
              <MdOutlineKeyboardBackspace className=" hover:text-gray-900 transition duration-200" />
            </Link>
            <PrimaryButton
              text="Edit"
              icon={<MdEdit />}
              onClick={() => setOpenEditBook(true)}
              className="text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
            />
          </div>

          {/* Book Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 bg-white p-6 shadow-md rounded-2xl">
            <div className="book-image w-full col-span-1 flex justify-center items-start">
              <img
                src={book.imageLink || "/default-book-cover.png"}
                alt={book.title}
                className="w-full h-auto max-h-[400px] object-fit rounded-lg shadow-lg"
              />
            </div>

            <div className="col-span-2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{book.title}</h2>
              <p className="text-gray-600 italic">{book.subTitle}</p>
              <h4 className="text-xl font-semibold text-gray-700 mt-2">
                Author: {book.author?.name ? book.author.name : book.author}
              </h4>
              {book.rating && (
                <small className="text-yellow-500 text-lg">{`Rating: ${book.rating}`}</small>
              )}
              <p className="text-gray-600">{book.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700">
                    <strong>Genre:</strong> {book.genre}
                  </p>
                  <p className="text-gray-700">
                    <strong>Pages:</strong> {book.pages}
                  </p>
                  <p className="text-gray-700">
                    <strong>ISBN:</strong> {book.isbn}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Year:</strong> {book.year}
                  </p>
                  <p className="text-gray-700">
                    <strong>Language:</strong> {book.language}
                  </p>
                  <p className="text-gray-700">
                    <strong>Publisher:</strong> {book.publisher}
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-10">
                <button
                  className=" font-semibold text-red-400 text-sm hover:text-red-700"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Are you sure you want to delete this book(${book.title})`
                      )
                    )
                      handleDelete();
                  }}
                >
                  Delete Book
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <AddOrEditBook
        authors={authors && authors}
        open={openEditBook}
        book={book}
        closeModal={() => {
          setOpenEditBook(false);
        }}
        setBookChange={setBookChange}
        fetchData={fetchData}
      />
    </>
  );
};

export default BookDetails;
