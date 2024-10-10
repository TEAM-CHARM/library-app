/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react"; // Modal library for transitions
import { Fragment } from "react";
import { apiAddBook, apiUpdateBook } from "../../services/book";
import toast from "react-hot-toast";

const inputStyle = "w-full px-4 py-2 border border-primary-light rounded-full";

const AddOrEditBook = ({ authors, open, book, closeModal, fetchData }) => {
  const [formData, setFormData] = useState({
    title: book?.title || "",
    isbn: book?.isbn || "",
    author: book?.author || "",
    description: book?.description || "",
    genre: book?.genre || "",
    imageLink: book?.imageLink || "",
    language: book?.language || "",
    pages: book?.pages || "",
    pdflink: book?.pdflink || "",
    publisher: book?.publisher || "",
    subtitle: book?.subtitle || "",
    year: book?.year || "",
    copies: book?.copies || "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    book && setFormData(book);
  }, [book]);

  const handleAddOrEditBook = async (bookInfo) => {
    try {
      setLoading(true);
      console.log("Book to add-->", bookInfo);
      let res;
      if (book?._id) {
        // Editing the book, so we use the update API
        res = await apiUpdateBook(book._id, bookInfo);
      } else {
        // Adding a new book
        res = await apiAddBook(bookInfo);
      }

      //if is editing use apiUpdateBook instead and complete it for me. not that I"m using patch method

      if (res.status === 200 || res.status === 201) {
        const newBook = res.data;
        toast.success(
          `${
            book?._id ? "Book updated successfully" : "Book added successfully"
          }`
        );
        fetchData()
        
        setFormData({
          title: "",
          isbn: "",
          author: "",
          description: "",
          genre: "",
          imageLink: "",
          language: "",
          pages: "",
          pdflink: "",
          publisher: "",
          subtitle: "",
          year: "",
          copies: "",
        });
        closeModal();
        
      }
    } catch (error) {
      console.log("Error adding book", error);
      toast.error(
        `${book?._id ? "Error updating book" : "Error editing book"}`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validate fields and convert them to the right data types according to the schema
    console.log("formdata->", formData);
    handleAddOrEditBook(formData);
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  //   className="text-lg font-medium leading-6 text-gray-900 mb-6"
                  className="section-header mb-6"
                >
                  {book?._id ? "Edit Book" : "Add New Book"}
                </Dialog.Title>

                <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First column fields */}
                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Title*
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        required
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        ISBN*
                      </label>
                      <input
                        type="text"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        // required
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Author*
                      </label>
                      <select
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        required
                        disabled={loading}
                      >
                        <option value="">Select Author</option>
                        {authors.map((author, index) => (
                          <option key={index} value={author._id}>
                            {author.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Genre
                      </label>
                      <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        // required
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Year
                      </label>
                      <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        // required
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Publisher
                      </label>
                      <input
                        type="text"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        // required
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Language
                      </label>
                      <input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        // required
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Pages
                      </label>
                      <input
                        type="number"
                        name="pages"
                        value={formData.pages}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        // required
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        PDF Link
                      </label>
                      <input
                        type="url"
                        name="pdflink"
                        value={formData.pdflink}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        No. of Copies
                      </label>
                      <input
                        type="number"
                        name="copies"
                        value={formData.copies}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        // required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Full-width fields */}
                  <div className="mt-4">
                    <label className="block mb-1 text-sm font-medium">
                      Tag-line
                    </label>
                    <input
                      type="text"
                      name="subtitle"
                      value={formData.subtitle}
                      onChange={handleChange}
                      className={`${inputStyle}`}
                      disabled={loading}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block mb-1 text-sm font-medium">
                      Description*
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className={`${inputStyle} rounded-xl`}
                      disabled={loading}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block mb-1 text-sm font-medium">
                      Image URL
                    </label>
                    <input
                      type="url"
                      name="imageLink"
                      value={formData.imageLink}
                      onChange={handleChange}
                      className={`${inputStyle}`}
                      disabled={loading}
                    />
                  </div>

                  {/* Submit button */}
                  <div className="mt-6 text-right">
                    <button
                      type="submit"
                      className={` px-6 py-2 rounded-full ${
                        loading
                          ? "bg-gray-300 text-gray-600 hover:bg-gray-300"
                          : "bg-primary-dark hover:bg-gray-700 text-white"
                      }  font-semibold transition`}
                      disabled={loading}
                    >
                      {loading
                        ? "Loading..."
                        : book?._id
                        ? "Update Book"
                        : "Add Book"}
                    </button>
                    <button
                      type="button"
                      className="ml-4 text-red-600 px-6 py-2 rounded-full hover:bg-gray-100 transition"
                      onClick={closeModal}
                      disabled={loading}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddOrEditBook;
