import React from "react";
import { useParams } from "react-router-dom";
import BookPage from "../components/page/bookPage";
import BooksList from "../components/page/booksList";
import { BookProvider } from "../hooks/useBooks";

const Books = () => {
  const params = useParams();
  const { bookId } = params;
  return (
    <>
      <BookProvider>
        {bookId ? <BookPage bookId={bookId} /> : <BooksList />}
      </BookProvider>
    </>
  );
};

export default Books;
