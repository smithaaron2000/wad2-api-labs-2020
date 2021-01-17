import express from 'express';
import upcomingModel from '../upcomingMovies/upcomingModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  upcomingModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  upcomingModel.findByMovieDBId(id).then(upcoming => res.status(200).send(upcoming)).catch(next);
});

export default router;

