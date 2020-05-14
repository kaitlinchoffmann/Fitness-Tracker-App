const express = require('express');
const friends = require('../models/Friends');

const router = express.Router();

router
 //friends

    .post('/addFriend', (req, res) => {
        try {
            const friendId = req.body.friend;
            const newFriend = friends.addFriend(req.userID, friendId);
            res.send( newFriend );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getFriends', (req, res) => {
        try {
            const allFriends = friends.getFriends(req.userID);
            res.send( allFriends );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/deleteFriend', (req, res) => {
        try {
            const friend = friends.deleteFriend(req.userID, req.body.friendID);
            res.send(friend);
        } catch(error) {
            res.status(401).send({ message: error.message });
        }
    })

    //requests
    .post('/sendRequest', (req, res) => {
        try {
            friend = req.body.friendID;
            picture = req.body.userPicture;
            name = req.body.userName;
            const SentRequests = friends.sendRequest(req.userID, friend, picture, name);
            res.send(SentRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getSentRequests', (req, res) => {
        try {
            const allRequests = friends.getSentRequests(req.userID);
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getPendingRequests', (req, res) => {
        try {
            const allRequests = friends.getPendingRequests(req.userID);
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/typeAHead', (req, res) => {
        try {
            const friendFound = friends.typeAHeadFriend(req.userID, req.body.friend);
            res.send(friendFound);
        } catch (error ){
            res.status(401).send({ message: error.message });
        }
    })

    //trying to use a GET request instead of POST
    .get('/typeAHead2/:friend', (req, res) => {
        try {
            const friendFound = friends.typeAHeadFriend(req.userID, req.params.friend);
            res.send(friendFound);
        } catch (error ){
            res.status(401).send({ message: error.message });
        }
    })


module.exports = router;