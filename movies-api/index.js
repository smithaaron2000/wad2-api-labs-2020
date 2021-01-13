import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import './db';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import upcomingRouter from './api/upcomingMovies';
import topratedRouter from './api/topRatedMovies';
import peopleRouter from './api/people';
import allMoviesRouter from './api/allMovies';
import session from "express-session";
import passport from "./authenticate";
import { loadUsers, loadMovies, loadPeople, loadTopRatedMovies, loadUpcomingMovies, loadAllMovies } from './seedData';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

if (process.env.SEED_DB) {
  loadUsers();
  loadAllMovies();
  loadMovies();
  loadPeople();
  loadTopRatedMovies();
  loadUpcomingMovies();
}

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());

const port = process.env.PORT;

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static('public'));
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/upcoming', upcomingRouter);
app.use('/api/toprated', topratedRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
app.use('/api/people', peopleRouter);
app.use('/api/allmovies', allMoviesRouter);

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});