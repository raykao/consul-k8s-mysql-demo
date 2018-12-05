var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname:  String,
  lastname: String,
  email: String
});

var User = mongoose.model('User', userSchema);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/seed', function(req, res, next){
  var user = new User({
    firstname: "Ray",
    lastname: "Kao",
    email: "ray.kao@microsoft.com"
  });

  res.status(200).json(user);
});

module.exports = router;
