/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksTable = ({  books, handleDeleteBook, handleEditBook, setSelectedBook, setOpenAddBook }) => {
  // const [selectedBook ,setSelectedBook] = useState({})
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const booksPerPage = 10; // Books per page

  // Calculate the index range for the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-2 border-primary-light rounded-xl shadow-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 text-left">
          <tr>
            <th className="p-4 font-semibold">ISBN</th>
            <th className="p-4 font-semibold">Title</th>
            <th className="p-4 font-semibold">Author</th>
            <th className="p-4 font-semibold">Genre</th>
            <th className="p-4 font-semibold">Year</th>
            <th className="p-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book, index) => (
            <tr
              key={index}
              className={`border-t ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td>
                <Link to={`/dashboard/books/${book._id}`} className="p-4">
                  {book.isbn}
                </Link>
              </td>
              <td>
                <Link to={`/dashboard/books/${book._id}`} className="p-4">
                  {book.title}
                </Link>
              </td>
              <td>
                <Link to={`/dashboard/books/${book._id}`} className="p-4">
                  {book.author}
                </Link>
              </td>
              <td>
                <Link to={`/dashboard/books/${book._id}`} className="p-4">
                  {book.genre}
                </Link>
              </td>
              <td>
                <Link to={`/dashboard/books/${book._id}`} className="p-4">
                  {book.year}
                </Link>
              </td>
              <td className="p-4 flex align-middle items-center gap-6">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    setSelectedBook(book)
                    console.log("selected book -", book);
                    setOpenAddBook(true)
                  } }
                >
                  <MdEdit size={25} />
                </button>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDeleteBook(book)}
                >
                  <MdDelete size={25} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BooksTable;
