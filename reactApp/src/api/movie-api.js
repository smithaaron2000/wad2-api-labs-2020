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

  export const deleteFavourites = (username, id) => {
    return fetch(`/api/users/${username}/favourites`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'delete',
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

  export const deleteWatchList = (username, id) => {
    return fetch(`/api/users/${username}/watchList`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'delete',
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
  };

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