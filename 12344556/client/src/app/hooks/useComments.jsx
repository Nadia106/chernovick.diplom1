import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAuth } from "./useAuth";
import { nanoid } from "nanoid";
import commentService from "../services/comment.service";
import { useUser } from "./useUser";

const CommentsContext = React.createContext();

export const useComments = () => {
  return useContext(CommentsContext);
};

const CommentsProvider = ({ children }) => {
  const { bookId } = useParams();
  const { currentUser } = useAuth();
  const [isLoading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getComments();
  }, [bookId]);

  async function createComment(data) {
    const comment = {
      ...data,
      _id: nanoid(),
      pageId: bookId,
      create_at: Date.now(),
      userId: currentUser._id
    };
    try {
      const { content } = await commentService.createComment(comment);
      setComments((prevState) => [...prevState, content]);
    } catch (error) {
      errorCatcher(error);
    }
    console.log(comment);
  }

  async function getComments() {
    try {
      const { content } = await commentService.getComments(bookId);
      setComments(content);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setLoading(false);
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }
  async function removeComment(id) {
    try {
      const { content } = await commentService.removeComment(id);
      if (content === null) {
        setComments((prevState) => prevState.filter((c) => c._id !== id));
      }
    } catch (error) {
      errorCatcher(error);
    }
  }
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);
  return (
    <CommentsContext.Provider
      value={{ comments, createComment, isLoading, removeComment }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

CommentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default CommentsProvider;
