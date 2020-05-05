const express = require('express');
const posts = require('../models/Posts');

const router = express.Router();

router
    .post('/share', (req, res) => {
       try {
           const history = req.body.progress;
           posts.Updates = posts.shareUpdate(history); 
           const Updates = posts.Updates;
           res.send({ Updates });
       } catch (error) {
           res.status(401).send({ message: error.message });
       }
    })

    .post('/shareFood', (req, res) => {
        try {
            const history = req.body.progress;
            posts.Updates = posts.shareFood(history); 
            const Updates = posts.Updates;
            res.send({ Updates });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
     })

    .get('/getPosts', (req, res) => {
        try {
            const allUpdates = posts.getUpdates(req.userID);
            res.send( allUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getFoodPosts', (req, res) => {
        try {
            const allUpdates = posts.getFoodUpdates(req.userID);
            res.send( allUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getFriendPosts', (req, res) => {
        try {
            const friendUpdates = posts.getFriendUpdates(req.body.friendId);
            res.send( friendUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getFriendFood', (req, res) => {
        try {
            const friendUpdates = posts.getFriendFood(req.body.friendId);
            res.send( friendUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

module.exports = router; 