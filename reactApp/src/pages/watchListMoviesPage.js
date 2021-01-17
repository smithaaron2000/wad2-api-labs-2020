import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'
import {AuthContext} from '../components/auth/authContext';
import RemoveFromWatchListButton from "../components/buttons/removeFromWatchList";

const WatchListMoviesPage = () => {
  const context = useContext(MoviesContext);
  const context1 = useContext(AuthContext);
  const [watchlist, setWatchList] = useState([]);

  if (context1.isAuthenticated) {
    var userWatchList = async() => {
      let watchMovies = await context1.getUserWatchList(context1.userName);
      console.log(watchMovies);
      return watchMovies;
    }
    userWatchList().then(userWatch => setWatchList(userWatch));
  
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Watch List"}
      action={movie => <RemoveFromWatchListButton movie={movie} />}
    />
  );
};
}

export default WatchListMoviesPage;