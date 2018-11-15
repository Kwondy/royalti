var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var User  = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findOne({})
  .exec(function(err, user){
    if(err) return res.json(err);

  res.render('index', {user:user});
});
});


/* GET English home page. */
router.get('/en', function(req, res, next) {
  User.findOne({})
  .exec(function(err, user){
    if(err) return res.json(err);

  res.render('indexen', {user:user});
});
});


/* POST login page. */
router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/', 
  failureRedirect : '/', //로그인 실패시 redirect할 url주소
  failureFlash : true 
}));


/* POST Register page. */
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/', 
  failureRedirect : '/signup', //가입 실패시 redirect할 url주소
  failureFlash : true 
}));

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
