import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import bookService from "../services/book.service";
import { toast } from "react-toastify";

const BookContext = React.createContext();

export const useBook = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  async function getBooks() {
    try {
      const { content } = await bookService.get();
      setBooks(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function getBookById(bookId) {
    return books.find((book) => book._id === bookId);
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }
  return (
    <BookContext.Provider value={{ books, getBookById }}>
      {!isLoading ? children : "Loading..."}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
