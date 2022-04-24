import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import GenresService from "../services/genres.service";
import { toast } from "react-toastify";

const GenresContext = React.createContext();

export const useGenres = () => {
  return useContext(GenresContext);
};

export const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const { content } = await GenresService.fetchAll();
        setGenres(content);
        setLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    };
    getGenres();
  }, []);
  const getGenres = (id) => {
    return genres.find((g) => g._id === id);
  };

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return (
    <GenresContext.Provider
      value={{
        genres,
        getGenres,
        isLoading
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

GenresProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
