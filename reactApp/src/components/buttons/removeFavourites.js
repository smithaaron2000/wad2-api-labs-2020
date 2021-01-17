import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { AuthContext } from "../auth/authContext";
import { deleteFavourites } from "../../api/movie-api";

const RemoveFromFavouritesButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context1 = useContext(AuthContext);

  const handleRemoveFromFavourite = e => {
    e.preventDefault();
    context.removeFromFavorites(movie.id);
    deleteFavourites(context1.userName, movie.id);
  };

  return (
    context1.isAuthenticated && (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleRemoveFromFavourite} 
    >
      Remove from Favourites
    </button>
    )
  );
};

export default RemoveFromFavouritesButton;