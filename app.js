const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const movies = require("./routes/api/movies");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

// mongoDB connect
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// movies route 
app.use('/api/movies', movies)
app.get("/", (req, res) => res.send("Hello World"));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
