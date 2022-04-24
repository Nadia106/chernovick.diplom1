import React from "react";
import PropTypes from "prop-types";
import { useGenres } from "../../../hooks/useGenres";

const Genre = ({ id }) => {
  const {getGenres} = useGenres()
  const {color, name, _id} = getGenres(id)
  return <span className={"badge m-1 bg-" + color} key={_id}>{name}</span>;
};
Genre.propTypes = {
  id: PropTypes.string.isRequired
};
export default Genre;
