const mongoose = require("mongoose"); 

const users = require("./User");

const friendSchema = new mongoose.Schema({
    userId: Number,
    FriendId: Number
});

const sentRequestSchema = new mongoose.Schema({
    userId: Number,
    requestId: Number   
});

const pendingRequestSchema = new mongoose.Schema({
    userId: Number,
    requestId: Number,
    requestPicture: String,
    requestName: String
})

//mongoose models
const Friends = mongoose.model("Friends", friendSchema);
const SentRequests = mongoose.model("SentRequests", sentRequestSchema);
const PendingRequests = mongoose.model("PendingRequests", pendingRequestSchema);

async function addFriend(userId, friendId) {
    const user = await Friends.find({"userId": userId, "FriendId": friendId});
    if(user.length > 0) throw Error ("Already a friend!");

    const newFriend =  await Friends.create({userId: userId, FriendId: friendId});
    const newFriend2 = await Friends.create({ userId: friendId, FriendId: userId});

    await PendingRequests.deleteOne({"userId": userId, "requestId": friendId});
    await SentRequests.deleteOne({"userId": friendId, "requestId": userId});
   
    return newFriend;
}

async function getFriends(userID) {
    const allFriends = [];
    const friends = await Friends.find({"userId": userID});

    for(let i = 0; i < friends.length; i++) {
        const user = await users.User.find({"userID": friends[i].FriendId});
        allFriends.push({Name: user[0].Name, userID: user[0].userID, Picture: user[0].Picture})
    }
    return allFriends;
}

async function deleteFriend(userID, friendID) {
    let friend = true;
    try {
        await Friends.deleteOne({"userId": userID, "FriendId": friendID});
        await Friends.deleteOne({"userId": friendID, "FriendId": userID});
    
        friend = false;
        return friend;
    }
    catch(error) {
        console.log(error);
    }
}

async function sendRequest(user, friend, picture, name) {
    const sent = await SentRequests.create({userId: user, requestId: friend});
    await PendingRequests.create({userId: friend, requestId: user, requestPicture: picture, requestName: name});
    return sent;
}

async function getSentRequests(userID) {
    const allRequests = [];
    const request = await SentRequests.find({"userId": userID});
    request.map(x => allRequests.push(x));

    return allRequests;
}

async function getPendingRequests(userID) {
    const allRequests = [];
    const request = await PendingRequests.find({"userId": userID});
    request.map(x => allRequests.push(x));

    return allRequests;
}

module.exports = {
    Friends, SentRequests, PendingRequests, addFriend, getFriends,
    sendRequest, getSentRequests, getPendingRequests, deleteFriend
}