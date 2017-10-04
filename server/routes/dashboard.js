const Job = require("../models/Job");
const express = require('express');
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);

const dashRoute = express.Router();

dashRoute.get('/dashboard', (req, res, next) => {
  Job.find()
  // .populate("center")
  // .populate("doctor")
    .then(jobs => res.status(200).json(jobs))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

dashRoute.post('/dashboard/new', (req, res) => {
  const title = req.body.title;
  const center = req.body.center;
  const date = req.body.date;
  const description = req.body.description;
  const doctor = req.body.doctor;

  const newJob = new Job({
      title,
      center,
      date,
      description,
      doctor
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

dashRoute.get('/dashboard/view/:id', (req, res) => {
  Job.findById(req.params.id)
    .then(job => res.status(200).json(job))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

dashRoute.put('/dashboard/view/:id', (req, res, next) => {
  const title = req.body.title;
  const center = req.body.center;
  const date = req.body.date;
  const description = req.body.description;
  const update = {
    title,
    center,
    date,
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

dashRoute.get('/dashboard/view/delete/:id', (req, res, next) => {
  Job.findByIdAndRemove(req.params.id)
    .then(job => res.status(200).json(job))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

module.exports = dashRoute;
