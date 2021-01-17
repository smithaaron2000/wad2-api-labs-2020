# Assignment 2 - Web API.

Name: Aaron Tierney Smith

## Features.
 
 + Feature 1 - Integrated Movies React App from Assignment 1
 + Feature 2 - Added routes in the API for Upcoming Movies, Top Rated Movies, Movie Details
 + Feature 3 - Added routes in the API for Popular People, People Details
 + Feature 4 - Mongo Integration - seed data for all of the above features (no use of tmdb-api)
 + Feature 5 - POST method for a specific user's favourites (add in React, also adds in API)
 + Feature 6 - POST method for a specific user's watch list (add in React, also adds in API)
 + Feature 7 - DELETE method for a specific user's favourites (remove from React and API)
 + Feature 8 - DELETE method for a specific user's watchlist (remove from React and API)
 + Feature 9 - Object referencing in the User schema for the watch list array (references Movies)
 + Feature 10 - Custom Mongoose validation for User passwords
 + Feature 11 - Swagger API Documentation
 
## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/smithaaron2000/wad2-api-labs-2020
```

followed by installation

```bat
git install
```

```bat
npm install
```

to start the database, run
```bat
mongod
```
in your command prompt.

Redirect to the movies-api folder and run
```bat
npm start
```

to start the React App, redirect to the reactApp folder and run
```bat
npm start
```

## API Configuration
Create a ``.env`` file in the movies-api folder with the following variables (see placeholder below)

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
REACT_APP_TMDB_KEY =YourReactTMDBKey
mongoDB=mongodb:YourMongoURL
MONGO_DB=mongodb:YourMongoURL
SEED_DB=true
SECRET=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/upcoming | Get a list of upcoming movies | N/A | N/A | N/A  
| /api/upcoming/{movieid} | Get an Upcoming Movie | N/A | N/A | N/A
| /api/toprated | Get a list of top rated movies | N/A | N/A | N/A
| /api/toprated/{movieid} | Get a Top Rated Movie | N/A | N/A | N/A
| /api/allMovies | Get a list of all movies in all categories | N/A | N/A | N/A
| /api/allMovies/{movieid} | Get a movie from all categories | N/A | N/A | N/A
| /api/people | Gets a list of people (actors) | N/A | N/A | N/A
| /api/people/{personid} | Gets a person | N/A | N/A | N/A
| /api/users | Gets a list of users | Register/Authenticate a user | N/A | N/A
| /api/users/{username}/favourites | Gets a list of a user's favourites | Add a movie to user's favourites | N/A | Delete a movie from user's favourites
| /api/users/{username}/watchlist | Gets a list of a user's "to watch" movies | Add a movie to user's watch list | N/A | Delete a movie from user's watch list

Swagger Documentation [Swaggerhub](https://app.swaggerhub.com/apis-docs/smithaaron2000/Movies-API/1.0.0#/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
+ Protected Routes for Favourites, Upcoming, Watch List and Top Rated Page.
+ Basic Log In and Sign Up (as seen in Labs).
+ Bearer token required in the API to access /api/movies

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
//Linked to the login function in the API
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

//Linked to the signup function in the API
export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

//Linked to the add favourites function in the API
export const favourites = (username, id) => {
    return fetch(`api/users/${username}/favourites`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({id: id })
    }).then(res => res.json())
  };

  //Linked to the delete favourites function in the API
  export const deleteFavourites = (username, id) => {
    return fetch(`api/users/${username}/favourites`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'delete',
      body: JSON.stringify({id: id })
    }).then(res => res.json())
  };

  //Linked to the get favourites function in the API
  export const getSpecificUserFavourites = (username) => {
    return fetch(
       `/api/users/${username}/favourites`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  //Linked to the add to watchlist function in the API
  export const watchList = (username, id) => {
    return fetch(`/api/users/${username}/watchList`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({id: id })
    }).then(res => res.json())
  };

  //Linked to the delete from watchlist function in the API
  export const deleteWatchList = (username, id) => {
    return fetch(`/api/users/${username}/watchList`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'delete',
      body: JSON.stringify({id: id })
    }).then(res => res.json())
  };

  //Linked to the get watchlist function in the API
  export const getSpecificUserWatchList = (username) => {
    return fetch(
       `/api/users/${username}/watchList`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
  
  //Linked to the get movies function in the API
  export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  //Linked to the get specific movie function in the API
  //Used for getting the specific details for Upcoming and Top Rated Movies also
  export const getMovie = id => {
    return fetch(
       `/api/allmovies/${id}`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  //Linked to the get upcoming movies function in the API
  export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  //Linked to the get top rated movies function in the API
  export const getTopRatedMovies = () => {
    return fetch(
       '/api/toprated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());

  //Linked to the get genres  function in the API
  export const getGenres = () => {
  return fetch(
     '/api/genres',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

  //Linked to the get people function in the API
  export const getPopularPeople = () => {
  return fetch(
     '/api/people',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

  //Linked to the get person function in the API
  export const getPerson = id => {
    return fetch(
      `/api/people/${id}`,{headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~

## Extra features

+ Contact Form - I have a contact form where the data is submitted to Firebase. I had tried to change this so that the data was actually stored in the mongo database, but unfortunately I could not figure it out. 

+ Swagger API Documentation - I created an API Documentation using Swagger, which documents the API design in a much more graphical and user-friendly manner.
  
