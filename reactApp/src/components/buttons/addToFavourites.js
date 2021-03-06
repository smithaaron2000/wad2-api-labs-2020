import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { AuthContext } from "../auth/authContext";
import { favourites } from "../../api/movie-api";

const AddToFavouriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context1 = useContext(AuthContext);

  const handleAddToFavourite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
    favourites(context1.userName, movie.id);
  };

  return (
    context1.isAuthenticated && (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavourite} 
    >
      Add to Favourites
    </button>
    )
  );
};

export default AddToFavouriteButton;