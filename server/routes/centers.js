const Job = require("../models/Job");
const Center = require("../models/Center");
const express = require('express');
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);

const centersRoute = express.Router();

centersRoute.get('/centers', (req, res, next) => {
  Center.find()
    .then(jobs => res.status(200).json(jobs))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

module.exports = centersRoute;
