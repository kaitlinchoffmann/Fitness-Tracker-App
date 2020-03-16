//const variables

export const User = [
    {
        Email: 'jill123@fakemail.com',
        Name: 'Jill', 
        Age: 31,
        Password: 'password',
        Height: 63,
        Weight: 123,
        Picture: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        BMI: findBMI(123, 63),
        Status: 'Getting those gains!!!',
        IsAdmin: false
    },
    {
        Email: "admin@fakemail.com",
        Name: "Kaitlin",
        Age: 27,
        Password: "cool",
        Height: 64,
        Weight: '',
        Picture: 'https://media.wired.com/photos/5932b220f682204f736975f0/4:3/w_660,c_limit/ff_cats_f.jpg',
        BMI: findBMI(64, 0),
        Status: "I'm the Admin!!",
        IsAdmin: true
    }   
];

export const Exercises = [
    {
        Exercise: 'squats', 
        Type: 'strength'
    },
    {
        Exercise: 'barbell',
        Type: 'strength'
    },
    {
        Exercise: 'jogging',
        Type: 'cardio'
    },
    {
        Exercise: 'threadmill',
        Type: 'cardio'
    }
];

export const Food = [
    { Food: 'apple',
      Group: 'Fruit'
    },
    { Food: 'broccoli', 
      Group: 'Vegetable'
    },
    {
      Food: 'steak',
      Group: 'Grain'
    },
    { Food: 'pasta',
      Group: 'Grain'
    }
];

export const AddedExercise = [];

export const AddedFood = [];

export const Friends = [
    {   
        Email: 'jill123@fakemail.com',
        FriendEmail: 'jack@fakemail.com',
        Name: 'Jack',
        Picture: 'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale',
        Status: 'Taking a break!'
    }
];

export const ExerciseLog = [ /* Maybe create a function for this*/
    {
        id: 100,
        Email: 'jill123@fakemail.com',
        Exercise: 'Squats',
        Type: 'Strength',
        Reps: '15',
        Sets: '4',
        Weight: 0,
        TimeMinutes: '15',
        Intensity: 'moderate',
        date: '02/29/2020' /* make a function, check the month in user side to create calender */
    }
];

export const Posts = [
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

export const ExerciseType = ['Aerobic', 'Strength', 'Flexibility', 'Balance', 'Coordination', 'Other'];

//let variables

export let CurrentUser = null;

export let cDate = null;

export let ProfileInfo = null;

//functions

export function findBMI(weight, height) {
    var bmi = (weight/(height * height)) * 703;
    return bmi.toFixed(2);
};

export function Login(email, password) {
    const user = User.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong password');
    
    CurrentUser = user;

    return CurrentUser;
};

export function Logout() {
    CurrentUser = null;
    return CurrentUser;
};

export function AddExercise(exerciseList) {
    for(var i = 0; i < exerciseList.length; i++) {
        AddedExercise.push(exerciseList[i]);
    }
    return AddedExercise;
};

export function AddFood(foodList) {
    for(var i = 0; i < foodList.length; i++) {
        AddedFood.push(foodList[i]);
    }
    return AddedFood;
};

export function AddNewEx(exercise, type) {
    const ex = Exercises.find(x => x.Exercise == exercise);
    if(ex) document.getElementById("exists").innerHTML="Exercise already exists";
    else {
        document.getElementById("exists").innerHTML="Exercise Added!";
        Exercises.push({exercise, type});
        return Exercises;
    }
};

export function AddNewFood(food, group) {
    const newFood = Food.find(x => x.Food == food);
    if(newFood) document.getElementById("exists2").innerHTML="Food already exists";
    else {
        document.getElementById("exists2").innerHTML="Food Added!";
        Food.push({food, group});
        return Food;
    }
};

export function AddNewUser(user, email, name, age, pw, h, w) {
    const newUser = User.find(x => x.Email == email);
    if(newUser) throw Error('Email already linked to an account');
    else {
        User.push({
            Email: email,
            Name: name, 
            Age: age, 
            Password: pw, 
            Height: h, 
            Weight: w,
            Picture: '', 
            BMI: findBMI(h,w),
            Status: '',
            IsAdmin: false 
        });
        return User;
    }
};

export function ChangeCurrent(user) {
    CurrentUser = user;
    return CurrentUser;
};

export function SubmitChanges(changes) {    
    var newBMI = findBMI(changes.Weight, changes.Height);
    changes.BMI = newBMI;
    ProfileInfo = changes;
    return ProfileInfo;
};


export function RemoveExercise(i, user, id) {
    const exercise = ExerciseLog.find(x => (x.Email == user.Email) && (x.id == id));
    exercise.splice(i,1);
};

export function currentDate() {
    let current = new Date();
    let day = String(current.getDate()).padStart(2, '0');
    let month = String(current.getMonth()+ 1).padStart(2, '0');
    let year = current.getFullYear();
    current = year + '-' + month + '-' + day; //if not in this format, findRecent() won't work
    cDate = current;
    return current;
};