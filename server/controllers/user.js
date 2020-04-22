const express = require('express');
const users = require('../models/User');

const router = express.Router();

router
    .get('/', (req, res) => res.send({
        CurrentDRI: users.CurrentDRI
    }))

    .get('/currentUser', (req, res) => {
        try {
            const cUser = users.CurrentUser;
            console.log(cUser);
            res.send( cUser );
        }
        catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/login', (req, res) => {
        try {
            const user = users.Login(req.body.email, req.body.password);
            res.send( { ...user, Password: undefined } );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    //register - new user
    .post('/register', (req, res) => {
        try {
            const user = users.AddNewUser(req.body.email, req.body.name, req.body.age, req.body.pw, req.body.cpw, req.body.h, req.body.w, req.body.act, req.body.goal, req.body.sex);
            res.send( { ...user, Password: undefined } );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    //admin registers new user
    .post('/registerUser', (req, res) => {
        try {
            const newUser = users.AddNewUserAdmin(req.body.name, req.body.email, req.body.pw, req.body.isAd);
            res.send( { ...newUser, Password: undefined });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/banUser', (req, res) => {
        try {
            const bannedUser = users.BanUser(req.body.userEmail);
            console.log(users.BannedUsers);
            res.send({ ...bannedUser, Password: undefined });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/logout', (req, res) => {
        try {
            const user = users.Logout();
            res.send( {...user} );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })


module.exports = router;    