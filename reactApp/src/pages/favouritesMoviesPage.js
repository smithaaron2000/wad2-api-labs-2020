import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import RemoveFromFavouritesButton from '../components/buttons/removeFavourites';
import {MoviesContext} from '../contexts/moviesContext'
import { AuthContext } from "../components/auth/authContext";

const FavoriteMoviesPage = () => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  if (context2.isAuthenticated) {
    var userFavourites = async() => {
      let favMovies = await context2.getUserFavourites(context2.userName);
      console.log(favMovies);
      return favMovies;
    }
    userFavourites().then(userFav => setFavourites(userFav));
    

  return (
    <MovieListPageTemplate
      movies={favourites}
      title={"Favourite Movies"}
      action={movie => <RemoveFromFavouritesButton movie={movie} />}
    />
  );
};
}

export default FavoriteMoviesPage;