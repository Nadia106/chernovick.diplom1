import React from "react";
import Genre from "./genre";
import PropTypes from "prop-types";
import { useGenres } from "../../../hooks/useGenres";

const GenresList = ({ genres }) => {
  const { isLoading } = useGenres();
  if (isLoading) return "Loading";
  return (
    <>
      {genres.map((genre) => (
        <Genre key={genre} id={genre} />
      ))}
    </>
  );
};
GenresList.propTypes = {
  genres: PropTypes.array
};

export default GenresList;
