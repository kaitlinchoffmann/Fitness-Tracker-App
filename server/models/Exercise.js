const mongoose = require("mongoose"); 

const addedExerciseSchema = new mongoose.Schema({
    date: String,
    email: String,
    userID: String,
    exName: String,
    exType: String,
    intensity: String,
    reps: Number,
    sets: Number,
    time: Number,
    weight: Number
});

const AddedExercise = mongoose.model("AddedExercise", addedExerciseSchema);

async function getUserExercises(userID) {
    const exercises = [];
    const userExercises = await AddedExercise.find({"userID": userID});
    userExercises.map(x => exercises.push(x));

    return exercises;
}

async function AddExercise(exerciseList) {
    const updatedList = [];
    for(let i = 0; i< exerciseList.length; i++) {
        const exercise = await AddedExercise.create(exerciseList[i]);
        updatedList.push(exercise);
    }
    return updatedList;
};

module.exports = {
    AddedExercise, getUserExercises, AddExercise
};