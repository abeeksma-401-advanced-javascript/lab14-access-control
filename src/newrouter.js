'use strict';

const auth = require('./auth/middleware');
const User = require('./auth/users-model');

const express = require('express');

const router = module.exports = new express.Router();

router.get('/public-stuff', (req, res) => {
  res.send('Hey! this is for everyone CommuSite')
}); //visible by anyone

router.get('/hidden-stuff') //valid login

router.get('/something-to-read') //read

router.post('/create-a-thing') //create

router.put('/update') //update

router.patch('/jp') //update

router.delete('/bye-bye') //delete

router.get('/everything') //superuser