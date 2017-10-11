const express = require('express');
const passport = require('passport');
const path = require('path');
const Invitation = require('../models/Invitation');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const nodemailer = require('nodemailer');

const invitationRoutes = express.Router();

invitationRoutes.post('/ask', (req, res, next) => {
      const inv = {
        role: req.body.role,
        username: req.body.username,
        collegiate: req.body.collegiate,
        speciality: req.body.speciality,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
      }

      Invitation.findOne({
        "username": inv.username
      }, '_id').exec().then(user => {
        if (user)
          return res.status(400).json({
            message: 'The DNI already exists'
          });

        debug('creating invitation');
        const invitation = new Invitation({
          role: inv.role,
          username: inv.username,
          name: inv.name,
          phone: inv.phone,
          email: inv.email,
          collegiate: inv.collegiate,
          speciality: inv.speciality
        });
        return invitation.save()
          .then(invitation => {
            var transporter = nodemailer.createTransport({
              service: 'Gmail',
              auth: {
                user: 'findingdocs@gmail.com',
                pass: 'findingDocs!'
              }
            });
            var text = `Bienvenido a findingDocs, \n Estamos tramitando su petición.\nEn breve nos pondremos en contacto con usted.\nUn saludo.`;
            var mailOptions = {
              from: 'findingDocs@gmail.com',
              to: req.body.email,
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
            res.status(200).json(invitation);

          })
          .catch(e => {
            console.log(e);
            res.status(400).json({
              message: 'Something went wrong'
            })
          });
      });
  });

invitationRoutes.get('/invitations', (req, res, next) => {
  Invitation.find()
    .then(jobs => res.status(200).json(jobs))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

invitationRoutes.get('/invitations/:id', (req, res) => {
  Invitation.findById(req.params.id)
    .then(i => res.status(200).json(i))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

invitationRoutes.get('/deleteinvitation/:id', (req, res, next) => {
  Invitation.findByIdAndRemove(req.params.id)
    .then(i => res.status(200).json(i))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

module.exports = invitationRoutes;
