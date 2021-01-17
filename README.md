# Assignment 2 - Web API.

Name: Aaron Tierney Smith

## Features.
 
 + Feature 1 - Integrated Movies React App from Assignment 1
 + Feature 2 - Added routes in the API for Upcoming Movies, Top Rated Movies, Movie Details
 + Feature 3 - Added routes in the API for Popular People, People Details
 + Feature 4 - Mongo Integration - seed data for all of the above features (no use of tmdb-api)
 + Feature 5 - POST method for a specific user's favourites (add in React, also adds in API)
 + Feature 6 - POST method for a specific user's watch list (add in React, also adds in API)
 + Feature 7 - Object referencing in the User schema for the watch list array (references Movies)

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone http:\myrepo.git
```

followed by installation

```bat
git install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
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
| /api/users/{username}/favourites | Gets a list of a user's favourites | Add a movie to user's favourites | N/A / N/A
| /api/users/{username}/watchlist | Gets a list of a user's "to watch" movies | Add a movie to user's watch list | N/A | N/A

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
+ Protected Routes for Favourites, Upcoming, Watch List and Top Rated Page.
+ Basic Log In and Sign Up (as seen in Labs).
+ Bearer token required in the API to access /api/movies

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const favourites = (username, id) => {
    return fetch(`api/users/${username}/favourites`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({id: id })
    }).then(res => res.json())
  };

  export const getSpecificUserFavourites = (username) => {
    return fetch(
       `/api/users/${username}/favourites`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const watchList = (username, id) => {
    return fetch(`/api/users/${username}/watchList`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({id: id })
    }).then(res => res.json())
  };

  export const getSpecificUserWatchList = (username) => {
    return fetch(
       `/api/users/${username}/watchList`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
  
  export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovie = id => {
    return fetch(
       `/api/allmovies/${id}`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTopRatedMovies = () => {
    return fetch(
       '/api/toprated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());

  export const getGenres = () => {
  return fetch(
     '/api/genres',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

  export const getPopularPeople = () => {
  return fetch(
     '/api/people',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

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

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
