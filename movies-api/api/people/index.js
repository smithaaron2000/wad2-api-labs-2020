import express from 'express';
import peopleModel from './peopleModel';

const router = express.Router();

  router.get('/', (req, res, next) => {
  peopleModel.find().then(people => res.status(200).send(people)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  peopleModel.findByPeopleId(id).then(person => res.status(200).send(person)).catch(next);
});

export default router;