import express from 'express';
import allMovieModel from './allMovieModel';
import { getCredits } from '../tmdb-api';
//import { getPopularPeople, getPerson } from '../tmdb-api';

const router = express.Router();

  router.get('/', (req, res, next) => {
  allMovieModel.find().then(allMovies => res.status(200).send(allMovies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  allMovieModel.findByMovieDBId(id).then(allMovies => res.status(200).send(allMovies)).catch(next);
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getCredits(id).then(cast => res.status(200).send(cast))
  .catch((error) => next(error));
});

// router.get('/', (req, res, next) => {
//   getPopularPeople().then(people => res.status(200).send(people))
//   .catch((error) => next(error));
// });


// router.get('/:id', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   getPerson(id).then(person => res.status(200).send(person))
//   .catch((error) => next(error));
// });

// router.get('/:id/credits', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   getPersonMovieCredits(id).then(cast => res.status(200).send(cast))
//   .catch((error) => next(error));
// });

export default router;