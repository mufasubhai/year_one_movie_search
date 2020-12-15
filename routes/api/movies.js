const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const Movie = require('../../models/Movie')


router.get("/test", (req, res) => res.json({ msg: "This is the movies route" }));

const validateMovieInput = require('../../validation/movies');

router.get('/', (req, res) => {
    Movie.find()
    .sort({name: -1})
    .then(movies => res.json(movies))
    .catch(err => res.status(404)).json({nomoviesfound: "No Movies Found with that title"})
});





module.exports = router;