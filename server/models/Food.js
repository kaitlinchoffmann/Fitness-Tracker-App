
const AddedFood = [
    {
        calories:283,
        carbs:75,
        date:"2020-04-20",
        email:"admin@fakemail.com",
        fat:1,
        food:"bagel",
        group:"Fruit",
        protein:1,
        sodium:5,
        sugar:57
    }
];

function getUserFood(currentEmail) {
    const food = [];
    AddedFood.map(function (x, index) {
        if(x.email == currentEmail) {
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
