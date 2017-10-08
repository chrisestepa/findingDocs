const express = require('express');
const passport = require('passport');
const path = require('path');
const Invitation = require('../models/Invitation');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);

const invitationRoutes = express.Router();

invitationRoutes.post('/ask', (req, res, next) => {
  const inv = {
    username: req.body.username,
    collegiate: req.body.collegiate,
    speciality: req.body.speciality,
    name: req.body.name,
    phone: req.body.phone,
  }

  debug('Find user in DB');

  Invitation.findOne({
      "username": inv.username
    }, '_id').exec().then(user => {
      if (user)
        return res.status(400).json({
          message: 'The DNI already exists'
        });

      debug('creating invitation');
      const invitation = new Invitation({
        username: inv.username,
        name: inv.name,
        phone: inv.phone,
        collegiate: inv.collegiate,
        speciality: inv.speciality
      });
      return invitation.save()
        .then(invitation => {
          req.login(invitation, (err) => {
            if (err)
              return res.status(500).json({
                message: 'Something went wrong'
              });

            res.status(200).json(invitation);
          });
        })
    })
    .catch(e => {
      console.log(e);
      res.status(400).json({
        message: 'Something went wrong'
      })
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
    .then( i => res.status(200).json(i))
    .catch(e => res.status(500).json({error:e.message}));
});

invitationRoutes.get('/deleteinvitation/:id', (req, res, next) => {
  Invitation.findByIdAndRemove(req.params.id)
  .then(i => res.status(200).json(i))
  .catch(e => res.status(500).json({error:e.message}));
});

module.exports = invitationRoutes;
