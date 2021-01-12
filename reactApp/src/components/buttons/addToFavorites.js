import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { AuthContext } from "../auth/authContext";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const context1 = useContext(AuthContext);
  //const { isAuthenticated } = useAuth0();

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    context1.isAuthenticated && (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
    )
  );
};

export default AddToFavoriteButton;