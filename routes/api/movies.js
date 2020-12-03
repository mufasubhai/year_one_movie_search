const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const Movie = require('../../models/Movie')


router.get("/test", (req, res) => res.json({ msg: "This is the movies route" }));





module.exports = router;