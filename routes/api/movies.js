const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require('../../models/Movie')
const keys = require('../../config/keys');

const validateMovieInput = require('../../validation/movies');

router.get("/test", (req, res) => res.json({ msg: "This is the movies route" }));


router.get('/', (req, res) => {
    Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404)).json({nomoviesfound: "No Movies Found with that title"})
});







router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(err =>
            res.status(404).json({nomoviesfound: "No movie found with that ID"})
        );
})


router.post('/',
    (req, res) => {
      const { errors, isValid } = validateMovieInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newMovie = new Movie({
        title: req.body.title,
        upVote: req.body.upVotes,
        downVote: req.body.downVote
      });
  
      newMovie.save().then(movie => res.json(movie));
    }
  );



    router.patch(
  "/:id", (req, res) => {
    const { downVote, upVote } = req.body;

    Movie.findById(req.params.id).then((movie) => {
        movie.downVote = downVote;
      movie.upVote = upVote;

      movie.save()
        .then((savedMovie) => res.json(savedMovie))
        .catch((err) => res.json(err));
    });
    return res;
  }
);


module.exports = router;