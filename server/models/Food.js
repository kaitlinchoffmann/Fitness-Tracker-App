const users = require("./User");

const AddedFood = [
    {
        calories:283,
        carbs:75,
        date:"2020-04-20",
        email:"admin@fakemail.com",
        userID:2,
        fat:1,
        food:"apple",
        group:"Fruit",
        protein:1,
        sodium:5,
        sugar:57
    },
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
        sugar:57
    }
];

function getUserFood(userID) {
    const food = [];
    AddedFood.map(function (x, index) {
        if(x.userID == userID) {
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
