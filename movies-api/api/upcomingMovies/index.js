import express from 'express';
//import { upcoming } from '../../seedData/upcomingMovies';
import upcomingModel from '../upcomingMovies/upcomingModel';
//import { getUpcomingMovies } from '../tmdb-api';

const router = express.Router();

// Get all upcoming movies
// router.get('/', (req, res, next) => {
//   getUpcomingMovies().then(upcoming => res.status(200).send(upcoming))
//   .catch((error) => next(error));
// });

router.get('/', (req, res, next) => {
  upcomingModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
});

export default router;

