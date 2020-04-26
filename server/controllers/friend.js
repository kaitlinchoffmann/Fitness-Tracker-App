const express = require('express');
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

    .get('/getFriends', (req, res) => {
        try {
            const allFriends = friends.getFriends();
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
            picture = req.body.userPicture;
            name = req.body.userName;
            const SentRequests = friends.sendRequest(user, friend, picture, name);
            res.send(SentRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getSentRequests', (req, res) => {
        try {
            const allRequests = friends.getSentRequests();
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getPendingRequests', (req, res) => {
        try {
            const allRequests = friends.getPendingRequests();
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })


module.exports = router;