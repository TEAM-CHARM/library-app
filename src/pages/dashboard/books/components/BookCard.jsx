/* eslint-disable react/prop-types */
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">by {book.author}</p>
        <p className="text-gray-500">{book.year}</p>
      </div>
    </div>
  );
};

export default BookCard;
