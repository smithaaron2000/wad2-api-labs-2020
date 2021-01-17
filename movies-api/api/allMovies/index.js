import express from 'express';
import allMovieModel from './allMovieModel';

const router = express.Router();

  router.get('/', (req, res, next) => {
  allMovieModel.find().then(allMovies => res.status(200).send(allMovies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  allMovieModel.findByMovieDBId(id).then(allMovies => res.status(200).send(allMovies)).catch(next);
});

export default router;