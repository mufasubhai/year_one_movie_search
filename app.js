const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const movies = require("./routes/api/movies");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const index = "./index.html"


app.listen(port, () => console.log(`Server is running on port ${port}`));
app.engine('html', require('ejs').renderFile);
// mongoDB connect
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// movies route 
app.use('/api/movies', movies)

app.get('/', function(req, res) {
  res.render('index.html')
})
// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
