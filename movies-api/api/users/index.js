import express from 'express';
import User from './userModel';
import jwt from 'jsonwebtoken';
import movieModel from '../movies/movieModel';

const router = express.Router();

// Get all users
router.get('/', (req, res, next) => {
    User.find().then(users =>  res.status(200).json(users)).catch(next);
});

/// Register OR authenticate a user
router.post('/', async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({
      success: false,
      msg: 'Please pass username and password.',
    });
  }
  if (req.query.action === 'register') {
    await User.create(req.body).catch(next);
    res.status(201).json({
      code: 201,
      msg: 'Successful created new user.',
    });
  } else {
    const user = await User.findByUserName(req.body.username).catch(next);
      if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          const token = jwt.sign(user.username, process.env.SECRET);
          // return the information including token as JSON
          res.status(200).json({
            success: true,
            token: 'BEARER ' + token,
          });
        } else {
          res.status(401).json({
            code: 401,
            msg: 'Authentication failed. Wrong password.'
          });
        }
      });
    }
});

// Update a user
router.put('/:id',  (req, res, next) => {
    if (req.body._id) delete req.body._id;
     User.update({
      _id: req.params.id,
    }, req.body, {
      upsert: false,
    })
    .then(user => res.json(200, user)).catch(next);
});

router.get('/:userName/favourites', (req, res, next) => {
  const userName = req.params.userName;
  User.findByUserName(userName).populate('favourites').then(
    user => res.status(201).json(user.favourites)
  ).catch(next);
});

router.post('/:userName/favourites', async (req, res, next) => {
  const newFavourite = req.body.id;
  const userName = req.params.userName;
  const movie = await movieModel.findByMovieDBId(newFavourite);
  const user = await User.findByUserName(userName);
  if (user.favourites.indexOf(movie._id) == -1) {
    await user.favourites.push(movie._id);
    await user.save(); 
    res.status(201).json(user).catch(next);
    
  } 
  else {
    res.status(401).json({
      code: 401,
      message: 'This movie has already been added to user favourites'
    });
  }
});

router.delete('/:userName/favourites', async (req, res, next) => {
  const removedFavourite = req.body.id;
  const userName = req.params.userName;
  const movie = await movieModel.findByMovieDBId(removedFavourite);
  const user = await User.findByUserName(userName);
  if (!user.favourites.includes(movie._id) == true) {
    res.status(401).json({
      code: 401,
      message: 'This movie is not in the user favourites'
    });
  } 
  else {
    await user.favourites.pull(movie._id);
    await user.save(); 
    res.status(201).json(user).catch(next);  
  }
});

router.get('/:userName/watchList', (req, res, next) => {
  const userName = req.params.userName;
  User.findByUserName(userName).populate('watchList').then(
    user => res.status(201).json(user.watchList)
  ).catch(next);
});

router.post('/:userName/watchList', async (req, res, next) => {
  const newWatchList = req.body.id;
  const userName = req.params.userName;
  const movie = await movieModel.findByMovieDBId(newWatchList);
  const user = await User.findByUserName(userName);
  if (user.watchList.indexOf(movie._id) == -1) {
    await user.watchList.push(movie._id);
    await user.save(); 
    res.status(201).json(user).catch(next);
    
  } 
  else {
    res.status(401).json({
      code: 401,
      message: 'This movie has already been added to user watch list'
    });
  }
});

router.delete('/:userName/watchList', async (req, res, next) => {
  const removedWatchList = req.body.id;
  const userName = req.params.userName;
  const movie = await movieModel.findByMovieDBId(removedWatchList);
  const user = await User.findByUserName(userName);
  if (!user.watchList.includes(movie._id) == true) {
    res.status(401).json({
      code: 401,
      message: 'This movie is not in the user watch list'
    });
  } 
  else {
    await user.watchList.pull(movie._id);
    await user.save(); 
    res.status(201).json(user).catch(next);  
  }
});

export default router;