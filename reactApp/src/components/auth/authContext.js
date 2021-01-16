import React, { useState, createContext } from "react";
import { login, signup, getSpecificUserFavourites, getSpecificUserWatchList } from "../../api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };
  
  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  const getUserFavourites = async (username) => {
    const movies = await getSpecificUserFavourites(username);
    return(movies);
  }

  const getUserWatchList = async (username) => {
    const upcoming = await getSpecificUserWatchList(username);
    return(upcoming);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        getUserFavourites,
        getUserWatchList,
        userName
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;