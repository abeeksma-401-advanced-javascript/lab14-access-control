'use strict';

const auth = require('./auth/middleware');
const User = require('./auth/users-model');

const express = require('express');

const router = module.exports = new express.Router();

router.get('/public-stuff', (req, res) => {
  res.send('Hey! this is for everyone CommuSite');
}); //visible by anyone

router.get('/hidden-stuff', auth, (req, res) => {
  res.send('you have reached the hidden stuff only available to those who have logged in');
}); //valid login

router.get('/something-to-read', auth('read'), (req, res) => {
  res.send('you can read the something to-read route');
}); //read

router.post('/create-a-thing', auth('create'), (req, res) => {
  //something goes here to change the data on routes
}); //create

router.put('/update', auth('put'), (req, res) => {
  //something goes here to update...things?
}); //update

router.patch('/jp', auth('put'), (req, res) => {
  //simialr to above need to update the stuffs
}); //update

router.delete('/bye-bye', auth('delete'), (req, res) => {
  //delete some shit
}); //delete

router.get('/everything', auth('')) //superuser