import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRatedMovies } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], toprated: [...state.toprated] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], toprated: [...state.toprated]};
    case "load-toprated":
      return { toprated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming ]};
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], toprated: [] });
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load-upcoming", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getTopRatedMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load-toprated", payload: {movies}});
    });
  },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        toprated: state.toprated,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider