const Job = require("../models/Job");
const Center = require("../models/Center");
const User = require("../models/User");
const express = require('express');
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const nodemailer = require('nodemailer');

const jobRoute = express.Router();

jobRoute.post('/job/new', (req, res) => {
  const title = req.body.title;
  const center = req.body.center;
  const datein = req.body.datein;
  const dateout = req.body.dateout;
  const description = req.body.description;
  const speciality = req.body.speciality;

  const newJob = new Job({
    title,
    center,
    speciality,
    datein,
    dateout,
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
  const datein = req.body.datein;
  const dateout = req.body.dateout;
  const description = req.body.description;
  const update = {
    title,
    center,
    datein,
    dateout,
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

jobRoute.get('/job/:id', (req, res, next) => {
  Job.findById(req.params.id).populate('center')
    .populate('doctor')
    .then(j => res.status(200).json(j))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

jobRoute.put('/job/apply/:id/:user', (req, res, next) => {
  Job.findById(req.params.id)
    .then(job => {
      if (job.doctor.indexOf(req.params.user) < 0) {
        Job.findByIdAndUpdate(req.params.id, {
            $push: {
              "doctor": req.params.user,
            }
          })
          .then(job => {
            res.status(200).json(job);
          })
      } else {
        res.status(400).json({
          message: 'Something went wrong'
        })
      }
    })
    .catch(e => {
      res.status(400).json({
        message: 'Something went wrong'
      })
    });
});

jobRoute.get('/deletejob/:id', (req, res, next) => {
  Job.findByIdAndRemove(req.params.id)
    .then(j => res.status(200).json(j))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

jobRoute.put('/deleteuser/:id/:user', (req, res, next) => {
  Job.findByIdAndUpdate(req.params.id, {
      $pull: {
        "doctor": req.params.user,
      }
    })
    .then(job => {
      res.status(200).json(job);
    })
    .catch(e => {
      res.status(400).json({
        message: 'Something went wrong'
      })
    });
});

jobRoute.get('/acceptuser/:id/:user', (req, res, next) => {
  User.findById(req.params.user)
    .then(user => {
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'findingdocs@gmail.com',
          pass: 'findingDocs!'
        }
      });
      var text = `Hola,\nHa sido aceptado en una de las ofertas a la que se apuntó.\nEn breve se pondrán en contacto con usted.\n\nUn saludo.`;
      var mailOptions = {
        from: 'findingDocs@gmail.com',
        to: user.email,
        subject: 'Bienvenido a findingDocs',
        text: text
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: ' + info.response);
        }
      });
      res.status(200).json(req.user)
    })
    .catch(e => res.status(500).json({
      error: e.message
    }));
});


module.exports = jobRoute;
