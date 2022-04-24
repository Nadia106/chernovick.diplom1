import React from "react";
import PropTypes from "prop-types";
import BookCard from "../ui/bookCard";
import GenresCard from "../ui/genresCard";
import DescriptionCard from "../ui/descriptionCard";
// import Comments from "../ui/comments";
import { useBook } from "../../hooks/useBooks";
// import CommentsProvider from "../../hooks/useComments";
import BackHistoryButton from "../common/backButton";

const BookPage = ({ bookId }) => {
  const { getBookById } = useBook();
  const book = getBookById(bookId);
  if (book) {
    return (
      <div className="container">
        <div>
          <BackHistoryButton/>
        </div>
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <BookCard book={book} />
            <GenresCard data={book.genres} />
          </div>
          <div className="col-md-8">
            <DescriptionCard value={book.description} />
            {/* <CommentsProvider>
              <Comments />
            </CommentsProvider> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
BookPage.propTypes = {
  boolId: PropTypes.string
};

export default BookPage;
