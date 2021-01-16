import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import {AuthContext} from '../components/auth/authContext';

const WatchListMoviesPage = () => {
  const context = useContext(MoviesContext);
  const context1 = useContext(AuthContext);
  //const watchlist = context.upcoming.filter( m => m.watchlist )
  const [watchlist, setWatchList] = useState([]);
  //const favourites = context.movies.filter( m => m.favorite )

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
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};
}

export default WatchListMoviesPage;