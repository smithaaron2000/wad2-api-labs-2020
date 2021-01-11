import express from 'express';
import { getMovies, getMovie, getSimilarMovies } from '../tmdb-api';
import { getMovieReviews, getCredits } from '../tmdb-api';
//import movieModel from './movieModel';

const router = express.Router();

// router.get('/', (req, res, next) => {
//   movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
// });

// router.get('/:id', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
// });

router.get('/', (req, res, next) => {
  getMovies().then(movies => res.status(200).send(movies))
  .catch((error) => next(error));
});


router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovie(id).then(movies => res.status(200).send(movies))
  .catch((error) => next(error));
});

// router.get('/:id/reviews', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   movieModel.findByMovieDBId(id).populate('reviews').then(
//     movieModel => res.status(201).json(movieModel.reviews)
//   ).catch(next);
// });

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id).then(results => res.status(200).send(results))
  .catch((error) => next(error));
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getCredits(id).then(cast => res.status(200).send(cast))
  .catch((error) => next(error));
});

router.get('/:id/similar', (req, res, next) => {
  const id = parseInt(req.params.id);
  getSimilarMovies(id).then(similar => res.status(200).send(similar))
  .catch((error) => next(error));
});


// //Add a review.
// router.post('/:id/reviews', async (req, res, next) => {
//   const reviewedMovie = req.body.id;
//   const userName = req.body.user;
//   const review = req.body.review;
//   const movie = await movieModel.findByMovieDBId(reviewedMovie);
//   const user = await User.findByUserName(userName);
//   await movie.reviews.push(movie.reviews);
//   await movie.save(); 
//   res.status(201).json(movie).catch(next); 
// });

// router.post('/:id/reviews', async (req, res, next) => {
//   const reviewedMovie = req.body.id;
//   const review = req.body.review;
//   //const userName = req.params.userName;
//   const movie = await movieModel.findByMovieDBId(reviewedMovie);
//   //const user = await User.findByUserName(userName);
//   await movie.reviews.push(review);
//   await movie.save(); 
//   res.status(201).json(movie); 
// });

export default router;