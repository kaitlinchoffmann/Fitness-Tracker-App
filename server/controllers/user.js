const express = require('express');
const users = require('../models/profile');

const router = express.Router();

router
    .post('/login', (req, res) => {
        try {
            const user = users.Login(req.body.email, req.body.password);
            res.send( { ...user, Password: undefined } );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/makeChanges', (req, res) => {
        try {
            const changes = users.SubmitChanges(req.body.changes);
            users.CurrentDRI = changes;
            console.log(users.CurrentUser);
            console.log(changes);
            res.send( changes );
        }
        catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getDri', (req, res) => {
       let dri = users.currentDRI2();
       console.log(dri);
       res.send(dri);
    })

module.exports = router;    