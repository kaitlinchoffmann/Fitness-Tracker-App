const mongoose = require("mongoose");

const exUpdateSchema = new mongoose.Schema({
    date: String,
      userID: String,
      data: [
          {
            email: String,
            exName: String,
            exType: String,
            intensity: String,
            reps: Number,
            sets: Number,
            time: Number,
            userID: String,
            weight: Number,
            shared: Boolean
          }
      ]
})

const foodUpdatesSchema = new mongoose.Schema({
    date: String,
        userID: String,
        data: [
            {
              calories: Number,
              carbs: Number,
              date: String,
              email: String,
              userID: String,
              fat: Number,
              food: String,
              group: String,
              protein: Number,
              sodium: Number,
              sugar: Number,
              shared: Boolean
            }
        ]
})

const Updates = mongoose.model("Updates", exUpdateSchema);

const FoodUpdates = mongoose.model("FoodUpdates", foodUpdatesSchema);


async function shareFood(history) {
    for(let i=0; i<history.length; i++) {
        const repeat = await FoodUpdates.find({"date": history[i].date, "userID": history[i].userID});
        if(repeat.length === 0 ) {
            let dat = history[i];
            await FoodUpdates.create({
                date: history[i].date,
                userID: dat.userID, 
                data: [dat]
            });
        }  
        else {
            const repeat2 = await FoodUpdates.find({"data.food": history[i].food, "data.calories": history[i].calories});
            if(repeat2.length === 0) {
                let data = history[i];
                foundDates = await FoodUpdates.updateOne({"date": history[i].date, "userID": history[i].userID}, { $push: {"data": data }});
            }  
        }
    }
    return FoodUpdates;
};

async function shareUpdate(history) {
    for(let i=0; i<history.length; i++) {
        const repeat = await Updates.find({"date": history[i].date, "userID": history[i].userID});
        if(repeat.length === 0 ) {
            let dat = history[i];
            await Updates.create({
                date: history[i].date,
                userID: dat.userID, 
                data: [dat]
            });
        }  
        else {
            const repeat2 = await Updates.find({"data.exName": history[i].exName, "data.intensity": history[i].intensity});
            if(repeat2.length === 0) {
                let data = history[i];
                foundDates = await Updates.updateOne({"date": history[i].date, "userID": history[i].userID}, { $push: {"data": data }});
            }  
        }
    }
    return FoodUpdates;

};

async function getUpdates(userID) {
    const allUpdates = [];
    const update = await Updates.find({"userID": userID});
    update.forEach(x => allUpdates.push(x));
    return allUpdates;
}

async function getFoodUpdates(userID) {
    const allUpdates = [];
    const update = await FoodUpdates.find({"userID": userID});
    update.forEach(x => allUpdates.push(x));
    return allUpdates;
}

async function getFriendUpdates(friendId) {
    const allUpdates = [];
    const update = await Updates.find({"userID": friendId});
    update.forEach(x => allUpdates.push(x));
    return allUpdates;
}

async function getFriendFood(friendId) {
    const allUpdates = [];
    const update = await FoodUpdates.find({"userID": friendId});
    update.forEach(x => allUpdates.push(x));
    return allUpdates;
}

module.exports = {
    Updates, shareUpdate, getUpdates, shareFood, getFoodUpdates, getFriendUpdates, getFriendFood
};