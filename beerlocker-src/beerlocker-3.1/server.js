// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var beerController = require('./controllers/beer');

// Connect to the beerlocker MongoDB
<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/beerlocker');
=======
// mongoose.connect('mongodb://localhost:27017/beerlocker');
mongoose.connect('mongodb://rw:devrw@ds043947.mongolab.com:43947/dev');
>>>>>>> 4b7f99d433b45e58a925612c4e96d85afd1545f6

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /beers
router.route('/beers')
  .post(beerController.postBeers)
  .get(beerController.getBeers);

//Create endpoint handlers for /beers/:beer_id
router.route('/beers/:beer_id')
  .get(beerController.getBeer)
  .put(beerController.putBeer)
  .delete(beerController.deleteBeer);

// Register all our routes with /api
app.use('/api', router);

// Start the server
<<<<<<< HEAD
app.listen(3000);
=======
app.listen(3000);
>>>>>>> 4b7f99d433b45e58a925612c4e96d85afd1545f6
