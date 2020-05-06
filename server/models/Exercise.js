const users = require("./User");

const AddedExercise = [
    {
        date:"2020-04-20",
        email:"j@j",
        userID:3,
        exName:"squats",
        exType:"Strength",
        intensity:"moderate",
        reps:"10",
        sets:"4",
        time:15,
        weight:"50"

    }
];

function getUserExercises(userID) {
    const exercises = [];
    AddedExercise.map(function(x, index) {
        if(x.userID == userID) {
            exercises.push(AddedExercise[index]);
        }
    });
    return exercises;
}

function AddExercise(exerciseList) {
    for(var i = 0; i < exerciseList.length; i++) {
        AddedExercise.push(exerciseList[i]);
    }
    return AddedExercise;
};

module.exports = {
    AddedExercise, getUserExercises, AddExercise
};