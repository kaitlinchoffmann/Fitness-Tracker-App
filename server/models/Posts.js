const users = require("./User");

const Updates = [
    {
      date:"2020-04-20",
      userID: 3,
      data: [{
      email:"j@j",
      exName:"squats",
      exType:"Strength",
      intensity:"moderate",
      reps:"10",
      sets:"4",
      time:15,
      userID:3,
      weight:"50"
      }]
    }
];

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

// function shareUpdate(history) {
//     for(let i=0; i<history.length; i++) {
//         const repeat = Updates.find(x => (x.exName == history[i].exName) && (x.date == history[i].date) && (x.intensity == history[i].intensity));
//         if(!repeat) {
//             Updates.push(history[i]);
//         }
//     }
//     return Updates;
// };

function shareUpdate(history) {
    for(let i=0; i<history.length; i++) {
        const repeat = Updates.find(x => (x.date == history[i].date) && (x.userID == history[i].userID));
        if(!repeat) {
            let dat = history[i];
                    Updates.push({
                        date: history[i].date,
                        userID: dat.userID, 
                        data: [dat]
                    });
                }  
        else {
            Updates.find(function(x,index) {
            const repeat2 = x.data.find(x => x.exName == history[i].exName && x.intensity == history[i].intensity); 
            if(!repeat2) {
                if(x.date == history[i].date && x.userID == history[i].userID) {
                    Updates[index].data.push(history[i]);
                }
            } 
            });  
        }
    }                  
    return Updates;
};

function getUpdates(userID) {
    const allUpdates = [];
    Updates.map(function(x) {
        if(x.userID == userID ) {
            allUpdates.push(x);
        }
    });
    return allUpdates;
}

function getFriendUpdates(friendId) {
    const allUpdates = [];
    Updates.map(function(x) {
        if(x.userID == friendId ) {
            allUpdates.push(x);
        }
    });
    return allUpdates;
}

module.exports = {
    Updates, Posts, shareUpdate, getUpdates, getFriendUpdates
};