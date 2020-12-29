import express from 'express';
import { getTopRatedMovies } from '../tmdb-api';
//import movieModel from './movieModel';

const router = express.Router();

// Get all top rated movies
router.get('/', (req, res, next) => {
  getTopRatedMovies().then(toprated => res.status(200).send(toprated))
  .catch((error) => next(error));
});

export default router;

