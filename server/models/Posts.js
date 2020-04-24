const users = require("./User");
const dris = require("./DRI");
const friends = require("./Friends");
let CurrentUser = require("./User");

const Updates = [];

const Posts = [
    {
        Email: 'jill123@fakemail.com',
        Post: 'Fun day at the gym!',
        Date: '02/27/2020' 
    },
    {
        Email: 'jill123@fakemail.com',
        Post: "I'm Beat today, so sleepy..",
        Date: '02/24/2020'
    }
];

module.exports = {
    Updates, Posts
};