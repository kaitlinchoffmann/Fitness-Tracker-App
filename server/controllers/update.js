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

    .get('/getPosts', (req, res) => {
        try {
            const allUpdates = posts.getUpdates();
            res.send( allUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })


module.exports = router; 