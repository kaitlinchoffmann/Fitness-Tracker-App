const express = require('express');
const users = require('../models/User');
const posts = require('../models/Posts');
const friends = require('../models/Friends');

const router = express.Router();

router
 //friends

    .post('/addFriend', (req, res) => {
        try {
            const userId = req.body.userId;
            const friendId = req.body.friend;
            const newFriend = friends.addFriend(userId, friendId);
            res.send( newFriend );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getFriends', (req, res) => {
        try {
            const userID = req.body.userID;
            const allFriends = friends.getFriends(userID);
            res.send( allFriends );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    //requests
    .post('/sendRequest', (req, res) => {
        try {
            user = req.body.userID;
            friend = req.body.friendID;
            const SentRequests = friends.sendRequest(user, friend);
            res.send(SentRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getSentRequests', (req, res) => {
        try {
            const user = req.body.userID;
            const allRequests = friends.getSentRequests(user);
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getPendingRequests', (req, res) => {
        try {
            const user = req.body.userID;
            const allRequests = friends.getPendingRequests(user);
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })


module.exports = router;