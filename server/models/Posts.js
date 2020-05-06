const users = require("./User");
const food = require("./Food");

const Updates = [
    {
      date:"2020-04-20",
      userID: 3,
      data: [
          {
            email:"j@j",
            exName:"squats",
            exType:"Strength",
            intensity:"moderate",
            reps:"10",
            sets:"4",
            time:15,
            userID:3,
            weight:"50",
            shared:true
          }
      ]
    }
];

const FoodUpdates = [
    {
        date:"2020-05-03",
        userID: 3,
        data: [
            {
              calories:283,
              carbs:75,
              date:"2020-05-03",
              email:"j@j",
              userID:3,
              fat:1,
              food:"apple",
              group:"Fruit",
              protein:1,
              sodium:5,
              sugar:57,
              shared:true
            }
        ]

    }
]

function shareFood(history) {
    for(let i=0; i<history.length; i++) {
        const repeat = FoodUpdates.find(x => (x.date == history[i].date) && (x.userID == history[i].userID));
        if(!repeat) {
            let dat = history[i];
                    FoodUpdates.push({
                        date: history[i].date,
                        userID: dat.userID, 
                        data: [dat]
                    });
                }  
        else {
            FoodUpdates.find(function(x,index) {
            const repeat2 = x.data.find(x => x.food == history[i].food && x.calories == history[i].calories); 
            if(!repeat2) {
                if(x.date == history[i].date && x.userID == history[i].userID) {
                    FoodUpdates[index].data.push(history[i]);
                }
            } 
            });  
        }
        // AddedFood.map(function(x) { 
        //     console.log(AddedFood);
        //     if(x.userID == history[i].userID && x.shared != true) {
        //         x.shared = true;
        //     }    
        // });
    }
    return FoodUpdates;
};

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

function getFoodUpdates(userID) {
    const allUpdates = [];
    FoodUpdates.map(function(x) {
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

function getFriendFood(friendId) {
    const allUpdates = [];
    FoodUpdates.map(function(x) {
        if(x.userID == friendId ) {
            allUpdates.push(x);
        }
    });
    return allUpdates;
}

module.exports = {
    Updates, shareUpdate, getUpdates, shareFood, getFoodUpdates, getFriendUpdates, getFriendFood
};