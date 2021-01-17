import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { AuthContext } from "../auth/authContext";
import { deleteWatchList } from "../../api/movie-api";

const RemoveFromWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context1 = useContext(AuthContext);

  const handleRemoveFromWatchList = e => {
    e.preventDefault();
    context.removeFromWatchList(movie.id);
    deleteWatchList(context1.userName, movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleRemoveFromWatchList}
    >
      Remove From Watch List
    </button>
  );
};

export default RemoveFromWatchListButton;