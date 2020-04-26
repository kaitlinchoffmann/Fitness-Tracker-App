const users = require("./User");

const AddedFood = [
    {
        calories:283,
        carbs:75,
        date:"2020-04-20",
        email:"admin@fakemail.com",
        userID:2,
        fat:1,
        food:"bagel",
        group:"Fruit",
        protein:1,
        sodium:5,
        sugar:57
    }
];

function getUserFood() {
    const user = users.CurrentUser.userID;
    const food = [];
    AddedFood.map(function (x, index) {
        if(x.userID == user) {
            food.push(AddedFood[index]);
        }
    });
    return food;
}

function AddFood(foodList) {
    for(var i = 0; i < foodList.length; i++) {
        AddedFood.push(foodList[i]);
    }
    return AddedFood;
};

module.exports = {
    AddedFood, getUserFood, AddFood
};