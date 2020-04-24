const users = require("./User");
const dris = require("./DRI");
const posts = require("./Posts");
let CurrentUser = require("./User");

// const Friends = [
//     {   
//         Email: 'jill@fakemail.com',
//         FriendEmail: 'j@j',
//         Name: 'Jack',
//         Picture: 'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale',
//         Status: 'Taking a break!'
//     },
//     {   
//         Email: 'j@j.com', //id = 4
//         FriendEmail: 'jill@fakemail.com',
//         Name: 'Jill',
//         Picture: 'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale',
//     }
// ];

const Friends = [
    {
        userId: 1,
        FriendId: 6
    },
    {
        userId: 1,
        FriendId: 3
    },
    {
        userId: 6,
        FriendId: 1
    },
    {
        userId: 3,
        FriendId: 1
    }
]

const SentRequests = [
    {
        userId: 1,
        requestId: 2
    },
    {
        userId: 1,
        requestId: 5
    }
]

const PendingRequests = [
    {
        userId: 2,
        requestId: 1
    }
]

module.exports = {
    Friends, SentRequests, PendingRequests
}