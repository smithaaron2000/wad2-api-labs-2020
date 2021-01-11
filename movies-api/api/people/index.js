import express from 'express';
import { getPopularPeople, getPerson, getPersonMovieCredits } from '../tmdb-api';
//import movieModel from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  getPopularPeople().then(people => res.status(200).send(people))
  .catch((error) => next(error));
});


router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  getPerson(id).then(person => res.status(200).send(person))
  .catch((error) => next(error));
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getPersonMovieCredits(id).then(cast => res.status(200).send(cast))
  .catch((error) => next(error));
});

export default router;