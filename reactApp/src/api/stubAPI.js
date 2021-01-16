class StubAPI {
    constructor() {
        this.favouriteMovies = [];
        this.watchList = [];
    }

    add(movie, upcoming) {
        this.favouriteMovies.push(movie);
        this.watchList.push(upcoming);
    }

    // add(upcoming) {
    //     this.watchList.push(upcoming);
    // }

   getAll() {
        return this.favouriteMovie;

    }

    getAll() {
        return this.watchList;
    }
}

export default new StubAPI();