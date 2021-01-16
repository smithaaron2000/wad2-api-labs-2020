import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import { AuthContext } from "../components/auth/authContext";

const FavoriteMoviesPage = () => {
  const context = useContext(MoviesContext);
  const context2 = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);
  //const favourites = context.movies.filter( m => m.favorite )

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
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};
}



export default FavoriteMoviesPage;