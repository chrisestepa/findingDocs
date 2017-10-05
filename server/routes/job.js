const Job = require("../models/Job");
const Center = require("../models/Center");
const express = require('express');
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);

const jobRoute = express.Router();

jobRoute.post('/job/new', (req, res) => {
  const title = req.body.title;
  const center = req.body.center;
  const date = req.body.date;
  const description = req.body.description;
  const speciality = req.body.speciality;

  const newJob = new Job({
      title,
      center,
      speciality,
      date,
      description,
    });
    return newJob.save()
    .then(job => res.status(200).json({
      message: 'New Job created!',
      job: job
    }))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

jobRoute.get('/job/view/:id', (req, res) => {
  Job.findById(req.params.id)
    .then(job => res.status(200).json(job))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

jobRoute.put('/job/view/:id', (req, res, next) => {
  const title = req.body.title;
  const center = req.body.center;
  const speciality = req.body.speciality;
  const date = req.body.date;
  const description = req.body.description;
  const update = {
    title,
    center,
    date,
    speciality,
    description
  };

  Job.findByIdAndUpdate(req.params.id, update, {
      new: true
    })
    .then(job => res.status(200).json(job))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

jobRoute.get('/job/view/delete/:id', (req, res, next) => {
  Job.findByIdAndRemove(req.params.id)
    .then(job => res.status(200).json(job))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

module.exports = jobRoute;
