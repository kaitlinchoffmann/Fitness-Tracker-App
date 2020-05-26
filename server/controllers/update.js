const express = require('express');
const posts = require('../models/Posts');

const router = express.Router();

router
    .post('/share', async (req, res) => {
       try {
           const history = req.body.progress;
           posts.Updates = await posts.shareUpdate(history); 
           const Updates = posts.Updates;
           res.send({ Updates });
       } catch (error) {
           res.status(401).send({ message: error.message });
       }
    })

    .post('/shareFood', async (req, res) => {
        try {
            const history = req.body.progress;
            posts.Updates = await posts.shareFood(history); 
            const Updates = posts.Updates;
            res.send({ Updates });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
     })

    .get('/getPosts', async (req, res) => {
        try {
            const allUpdates = await posts.getUpdates(req.userID);
            res.send( allUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getFoodPosts', async (req, res) => {
        try {
            const allUpdates = await posts.getFoodUpdates(req.userID);
            res.send( allUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getFriendPosts', async (req, res) => {
        try {
            const friendUpdates = await posts.getFriendUpdates(req.body.friendId);
            res.send( friendUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getFriendFood', async (req, res) => {
        try {
            const friendUpdates = await posts.getFriendFood(req.body.friendId);
            res.send( friendUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

module.exports = router; 