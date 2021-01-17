import express from 'express';
import topRatedModel from '../topRatedMovies/topRatedModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  topRatedModel.find().then(toprated => res.status(200).send(toprated)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  topRatedModel.findByMovieDBId(id).then(toprated => res.status(200).send(toprated)).catch(next);
});

export default router;

