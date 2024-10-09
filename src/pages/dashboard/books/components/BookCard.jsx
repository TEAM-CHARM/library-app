/* eslint-disable react/prop-types */
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="w-full h-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full h-60">
        <img
          src={book.imageLink}
          alt={book.title}
          className="absolute inset-0 w-full h-full object-fit object-center"
        />
      </div>
      {/* <div className="p-4 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 truncate">
          {book.title}
        </h3>
        <p className="text-gray-600 mb-1">by {book.author}</p>
        <p className="text-gray-500">{book.year}</p>
      </div> */}
    </div>
  );
};

export default BookCard;
