const mongoose = require("mongoose"); 

const addedFoodSchema = new mongoose.Schema({
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
    sugar: Number
});

const AddedFood = mongoose.model("AddedFood", addedFoodSchema);

async function getUserFood(userID) {
    const food = [];
    const userFood = await AddedFood.find({"userID": userID});
    userFood.map(x => food.push(x));

    return food;
}

async function AddFood(foodList) {
    const updatedList = [];
    for(let i = 0; i< foodList.length; i++) {
        const food = await AddedFood.create(foodList[i]);
        updatedList.push(food);
    }
    return updatedList;
};

module.exports = {
    AddedFood, getUserFood, AddFood
};
