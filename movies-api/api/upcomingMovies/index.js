import express from 'express';
import { getUpcomingMovies } from '../tmdb-api';
//import movieModel from './movieModel';

const router = express.Router();

// Get all upcoming movies
router.get('/', (req, res, next) => {
  getUpcomingMovies().then(upcoming => res.status(200).send(upcoming))
  .catch((error) => next(error));
});

export default router;

