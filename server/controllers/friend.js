const express = require('express');
const friends = require('../models/Friends');

const router = express.Router();

router
 //friends

    .post('/addFriend', async (req, res) => {
        try {
            const friendId = req.body.friend;
            const newFriend = await friends.addFriend(req.userID, friendId);
            res.send( newFriend );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getFriends', async (req, res) => {
        try {
            const allFriends = await friends.getFriends(req.userID);
            res.send( allFriends );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/deleteFriend', async (req, res) => {
        try {
            const friend = await friends.deleteFriend(req.userID, req.body.friendID);
            res.send(friend);
        } catch(error) {
            res.status(401).send({ message: error.message });
        }
    })

    //requests
    .post('/sendRequest', async (req, res) => {
        try {
            friend = req.body.friendID;
            picture = req.body.userPicture;
            name = req.body.userName;
            const SentRequests = await friends.sendRequest(req.userID, friend, picture, name);
            res.send(SentRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getSentRequests', async (req, res) => {
        try {
            const allRequests = await friends.getSentRequests(req.userID);
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getPendingRequests', async (req, res) => {
        try {
            const allRequests = await friends.getPendingRequests(req.userID);
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/typeAHead', async (req, res) => {
        try {
            const friendFound = await friends.typeAHeadFriend(req.userID, req.body.friend);
            res.send(friendFound);
        } catch (error ){
            res.status(401).send({ message: error.message });
        }
    })

    //trying to use a GET request instead of POST
    .get('/typeAHead2/:friend', async (req, res) => {
        try {
            const friendFound = await friends.typeAHeadFriend(req.userID, req.params.friend);
            res.send(friendFound);
        } catch (error ){
            res.status(401).send({ message: error.message });
        }
    })


module.exports = router;