import express from 'express';
//import { getMovies, getMovie } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import movieModel from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

// router.get('/', (req, res, next) => {
//   getMovies().then(movies => res.status(200).send(movies))
//   .catch((error) => next(error));
// });

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

// router.get('/:id', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   getMovie(id).then(movies => res.status(200).send(movies))
//   .catch((error) => next(error));
// });

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

// // Add a favourite. No duplicate prevention yet
// router.post('/:userName/favourites', async (req, res, next) => {
//   const newFavourite = req.body.id;
//   const userName = req.params.userName;
//   const movie = await movieModel.findByMovieDBId(newFavourite);
//   const user = await User.findByUserName(userName);
//   await user.favourites.push(movie._id);
//   await user.save(); 
//   res.status(201).json(user).catch(next); 
// });

//Add a review.
router.post('/:id/reviews', async (req, res, next) => {
  const reviewedMovie = req.body.id;
  //const userName = req.params.userName;
  const movie = await movieModel.findByMovieDBId(reviewedMovie);
  //const user = await User.findByUserName(userName);
  await movie.reviews.push(movie.reviews);
  await movie.save(); 
  res.status(201).json(movie).catch(next); 
});

export default router;