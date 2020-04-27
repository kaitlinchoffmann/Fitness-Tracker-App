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

//possibly useful for updates
// const ExerciseLog = [ /* Maybe create a function for this*/
//     {
//         id: 100,
//         Email: 'jill123@fakemail.com',
//         Exercise: 'Squats',
//         Type: 'Strength',
//         Reps: '15',
//         Sets: '4',
//         Weight: 0,
//         TimeMinutes: '15',
//         Intensity: 'moderate',
//         date: '02/29/2020' /* make a function, check the month in user side to create calender */
//     }
// ];

//possibly useful in future

// function AddNewEx(exercise, type) {
//     const ex = Exercises.find(x => x.Exercise == exercise);
//     if(ex) document.getElementById("exists").innerHTML="Exercise already exists";
//     else {
//         document.getElementById("exists").innerHTML="Exercise Added!";
//         Exercises.push({exercise, type});
//         return Exercises;
//     }
// };

// function AddNewFood(food, group) {
//     const newFood = Food.find(x => x.Food == food);
//     if(newFood) document.getElementById("exists2").innerHTML="Food already exists";
//     else {
//         document.getElementById("exists2").innerHTML="Food Added!";
//         Food.push({food, group});
//         return Food;
//     }
// };
