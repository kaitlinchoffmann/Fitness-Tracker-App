const express = require('express');
const users = require('../models/User');
const posts = require('../models/Posts');
const friends = require('../models/Friends');

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

    //posts
    .post('/share', (req, res) => {
        try {
            const history = req.body.progress;
            for(let i=0; i<history.length; i++) {
                const repeat = posts.Updates.find(x => (x.exName == history[i].exName) && (x.date == history[i].date) && (x.intensity == history[i].intensity));
                if(!repeat) {
                    posts.Updates.push(history[i]);
                }
            }
            const Updates = posts.Updates;
            res.send({ Updates });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getPosts', (req, res) => {
        try {
            const user = users.CurrentUser;
            console.log(users.CurrentUser.Email);
            const allUpdates = [];
            posts.Updates.map(function(x, index) {
                if(x.email == user.Email ) {
                    allUpdates.push(x);
                }
            });
            console.log(allUpdates);
            res.send( allUpdates );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    //friends
    .post('/getUser', (req, res) => {
        try {
            userSearched = req.body.userSearched;
            const allUsers = users.User;
            let searched = [];
            let user = allUsers.map(function(x, index) {
                if(x.Name == userSearched && x.userID != users.CurrentUser.userID) {
                    searched.push(x);
                }
            });
            res.send( searched );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getSingleUser', (req, res) => {
        try {
            const user = users.User.find(x => x.userID == req.body.userClicked);
            if(user) {
                res.send({ ...user, Password: undefined });
            } else throw Error("User not found");
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/addFriend', (req, res) => {
        try {
            const user = friends.Friends.find(x => x.userId == req.body.userId && x.FriendId == req.body.friend);
            if(user) throw Error ("Already a friend!");

            const newFriend = { userId: req.body.userId, FriendId: req.body.friend}
            const newFriend2 = { userId: req.body.friend, FriendId: req.body.userId}
            friends.Friends.push(newFriend);
            friends.Friends.push(newFriend2);
            friends.PendingRequests.map(function(x, index) {
                if(x.userId == req.body.userId && x.requestId == req.body.friend) {
                    friends.PendingRequests.splice(index,1);
                }
            })
            friends.SentRequests.map(function(x, index) {
                if(x.userId == req.body.friend && x.requestId == req.body.userId) {
                    friends.SentRequests.splice(index,1);
                }
            })
            res.send( newFriend );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getFriends', (req, res) => {
        try {
            const allFriends = [];

            const getFriends = friends.Friends.map(function(x, index) {
                if(x.userId == req.body.userID) {
                   const user = users.User.find(y => y.userID == friends.Friends[index].FriendId);
                   allFriends.push({
                       Name: user.Name,
                       userID: user.userID,
                       Picture: user.Picture
                   });
               }
            })
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
            friends.SentRequests.push({userId: user, requestId: friend});
            friends.PendingRequests.push({userId: friend, requestId: user});
            res.send(friends.SentRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getSentRequests', (req, res) => {
        try {
            const user = req.body.userID;
            const allRequests = [];
            friends.SentRequests.map(function(x, index) {
                if(x.userId == user) {
                    allRequests.push(friends.SentRequests[index]);
                }
            })
            console.log(allRequests);
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/getPendingRequests', (req, res) => {
        try {
            const user = req.body.userID;
            const allRequests = [];
            friends.PendingRequests.map(function(x, index) {
                if(x.userId == user) {
                    allRequests.push(friends.PendingRequests[index]);
                }
            })
            res.send(allRequests);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/deleteSentRequest', (req, res) => {

    })




module.exports = router;    