//const variables

const User = [
    {
        Email: 'jill@fakemail.com',
        Name: 'Jill', 
        Age: 31,
        Password: 'password',
        Height: 63,
        Weight: 123,
        Activity: "active",
        Sex: "Female",
        EER: findEER(31, 123, 63, "active", "maintain", "female"),
        Goal: "maintain",
        Picture: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        BMI: findBMI(123, 63),
        Status: 'Getting those gains!!!',
        IsAdmin: false,
        DRI: findDRI(2278, 123, "jill@fakemail.com"),
        userID: 0
    },
    {
        Email: "admin@fakemail.com",
        Name: "Kaitlin",
        Age: 27,
        Password: "cool",
        Height: 64,
        Weight: 107,
        Activity: 'low',
        Sex: 'Female',
        EER: findEER(27, 107, 64, "low", "gainOne", "female"),
        Goal: "gainOne",
        Picture: 'https://media.wired.com/photos/5932b220f682204f736975f0/4:3/w_660,c_limit/ff_cats_f.jpg',
        BMI: findBMI(107, 64),
        Status: "I'm the Admin!!",
        IsAdmin: true,
        DRI: findDRI(1998, 107, "admin@fakemail.com"),
        userID: 1
    },
    {
        Email: 'j@j',
        Name: 'Jack', 
        Age: 51,
        Password: 'p',
        Height: 69,
        Weight: 300,
        Activity: "low",
        Sex: "male",
        EER: findEER(51, 300, 69, "low", "maintain", "male"),
        Goal: "maintain",
        Picture: "https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale",
        BMI: findBMI(300, 69),
        Status: 'Doing a lot',
        IsAdmin: false,
        DRI: findDRI(3623,300,"j@j"),
        userID: 2
    }   
];

const DRI = [findDRI(2278, 123, "jill@fakemail.com"), findDRI(1998, 107, "admin@fakemail.com"), findDRI(3623,300,"j@j")];

const Exercises = [
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

const Food = [
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

const AddedExercise = [
    {
        date:"2020-04-20",
        email:"j@j",
        exName:"squats",
        exType:"Strength",
        intensity:"moderate",
        reps:"10",
        sets:"4",
        time:15,
        weight:"50"

    }
];

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

const Friends = [
    {   
        Email: 'jill123@fakemail.com',
        FriendEmail: 'jack@fakemail.com',
        Name: 'Jack',
        Picture: 'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale',
        Status: 'Taking a break!'
    }
];

const ExerciseLog = [ /* Maybe create a function for this*/
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

const Posts = [
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

const ExerciseType = ['Aerobic', 'Strength', 'Flexibility', 'Balance', 'Coordination', 'Other'];

let CurrentDRI = null;

let cDate = null;

let ProfileInfo = null;

//functions

function findBMI(weight, height) {
    var bmi = (weight/(height * height)) * 703;
    return bmi.toFixed(2);
};

function currentDRI() {
    const dri = DRI.find(x => x.Email == this.CurrentUser.Email);
    console.log(dri);
    if(!dri) throw Error('DRI not found');
    
    this.CurrentDRI = dri;
    return CurrentDRI;
};

function currentDRI2() {
    const dri = DRI.find(x => x.Email == this.CurrentUser.Email);
    console.log(dri);
    if(!dri) throw Error('DRI not found');
    
    this.CurrentDRI = dri;
    return this.CurrentDRI;
};

function Logout() {
    ob.CurrentUser = null;
    return ob.CurrentUser;
};

function getUserExercises(currentEmail) {
    const exercises = [];
    const ex = AddedExercise.map(function(x, index) {
        if(x.email == currentEmail) {
            exercises.push(AddedExercise[index]);
        }
    });
    return exercises;
}

function getUserFood(currentEmail) {
    const food = [];
    AddedFood.map(function (x, index) {
        if(x.email == currentEmail) {
            food.push(AddedFood[index]);
        }
    });
    return food;
}

function AddExercise(exerciseList) {
    for(var i = 0; i < exerciseList.length; i++) {
        AddedExercise.push(exerciseList[i]);
    }
    return AddedExercise;
};

function AddFood(foodList) {
    for(var i = 0; i < foodList.length; i++) {
        AddedFood.push(foodList[i]);
    }
    return AddedFood;
};

function AddNewEx(exercise, type) {
    const ex = Exercises.find(x => x.Exercise == exercise);
    if(ex) document.getElementById("exists").innerHTML="Exercise already exists";
    else {
        document.getElementById("exists").innerHTML="Exercise Added!";
        Exercises.push({exercise, type});
        return Exercises;
    }
};

function AddNewFood(food, group) {
    const newFood = Food.find(x => x.Food == food);
    if(newFood) document.getElementById("exists2").innerHTML="Food already exists";
    else {
        document.getElementById("exists2").innerHTML="Food Added!";
        Food.push({food, group});
        return Food;
    }
};

function AddNewUser(user, email, name, age, pw, cpw, h, w, act, goal, sex) {
    const newUser = User.find(x => x.Email == email);
    if(newUser) throw Error('Email already linked to an account');
    if(email == "") throw Error('Please enter an email');
    if(name == "") throw Error('Please enter a name');
    if(age == "") throw Error('Please enter an age');
    if(pw == "") throw Error('Please enter a password');
    if(h == "") throw Error('Please enter a height');
    if(w == "") throw Error('Please enter a weight');
    if(act == "") throw Error('Please enter an activity level');
    if(goal == "") throw Error('Please enter a goal');
    if(sex == "") throw Error('Please enter a sex');
    if(pw != cpw) throw Error('Passwords must match');
    else {
        User.push({
            Email: email,
            Name: name, 
            Age: age, 
            Password: pw, 
            Height: h, 
            Weight: w,
            Activity: act,
            Sex: sex,
            EER: findEER(age, w, h, act, goal, sex),
            Goal: goal,
            Picture: '', 
            BMI: findBMI(h,w),
            Status: '',
            IsAdmin: false 
        });
        return User;
    }
};

function ChangeCurrent(user) {
    ob.CurrentUser = user;
    return ob.CurrentUser;
};

function SubmitChanges(changes) {  
    this.CurrentUser = changes; 
    var newBMI = findBMI(changes.Weight, changes.Height);
    this.CurrentUser.BMI = newBMI;
    var newEER = findEER(changes.Age, changes.Weight, changes.Height, changes.Activity, changes.Goal, changes.Sex);
    this.CurrentUser.EER = newEER;
    var newDRI = findDRI(newEER, changes.Weight, changes.Email);
    this.CurrentUser.DRI = newDRI;
    this.CurrentDRI = newDRI;
    console.log(this.CurrentUser);
    return this.CurrentDRI;
};


function RemoveExercise(i, user, id) {
    const exercise = ExerciseLog.find(x => (x.Email == user.Email) && (x.id == id));
    exercise.splice(i,1);
};

function currentDate() {
    let current = new Date();
    let day = String(current.getDate()).padStart(2, '0');
    let month = String(current.getMonth()+ 1).padStart(2, '0');
    let year = current.getFullYear();
    current = year + '-' + month + '-' + day; //if not in this format, findRecent() won't work
    cDate = current;
    return current;
};

function findPA(sex, age, activity) { // PA = Physical Activity Coefficients
    let PA = 0;
    if(activity == "sedentary") {
        PA = 1.0;
    }
    else if(sex == "female") {
        if(age >= 3 && age <= 18) {
            if(activity == "low") {
                PA = 1.16;
            }
            else if(activity == "active") {
                PA = 1.31;
            }
            else {
                PA = 1.56;
            }
        }
        else if(age >= 19) {
            if(activity == "low") {
                PA = 1.12;
            }
            else if(activity == "active") {
                PA = 1.27;
            }
            else {
                PA = 1.45;
            }
        }
    }
    else {
        if(age >= 3 && age <= 18) {
            if(activity == "low") {
                PA = 1.13;
            }
            else if(activity == "active") {
                PA = 1.26;
            }
            else {
                PA = 1.42;
            }
        }
        else if(age >= 19) {
            if(activity == "low") {
                PA = 1.11;
            }
            else if(activity == "active") {
                PA = 1.25;
            }
            else {
                PA = 1.48;
            }
        }
    }
    return PA;
};

function findEER(age, weight, height, activity, goal, sex) { //Estimate Energy Requirement
    let EER = 0;
    let kg = weight / 2.20462;
    let m = 0.0254 * height;
    let pa = findPA(sex, age, activity);

    if(age <= 0.3) {
        EER = (89 * kg - 100) + 175;
    }
    else if(age <= 0.6) {
        EER = (89 * kg - 100) + 56; 
    }
    else if(age < 1) {
        EER = (89 * kg - 100) + 22;
    }
    else if(age < 3) {
        EER = (89 * kg - 100) + 20;
    }
    else if(sex == "female") {
        if(age >= 3 && age <= 8) {
            EER = 135.3 - (30.8 * age) + pa * ((10.0 * kg) + (934 * m)) + 20;
        } 
        else if(age <= 18) {
            EER = 135.3 - (30.8 * age) + pa * ((10.0 * kg) + (934 * m)) + 25;
        }
        else {
            EER = 354 - (6.91 * age) + pa * ((9.36 * kg) + (726 * m));
        }
    } 
    else {
        if(age >= 3 && age <= 8) {
            EER = 88.5 - (61.9 * age) + pa * ((26.7 * kg) + (903 * m)) + 20;
        } 
        else if(age <= 18) {
            EER = 88.5 - (61.9 * age) + pa * ((26.7 * kg) + (903 * m)) + 25;
        }
        else {
            EER = 662 - (9.53 * age) + pa * ((15.91 * kg) + (536.6 * m));
        }
    }
    
    if(goal == "gainOne") {
        EER += 500;
    }
    else if(goal == "gainTwo") {
        EER += 1000;
    }
    else if(goal == "loseOne") {
        EER -= 500;
        if(EER < 1200) {
            EER = 1200;
            alert("Warning: Calorie intake goal cannot be lower than 1200 due to risk of nutrient deficiency.")
        }
    }
    else if(goal == "loseTwo") {
        EER -= 1000;
        if(EER < 1200) {
            EER = 1200;
            alert("Warning: Calorie intake goal cannot be lower than 1200 due to risk of nutrient deficiency.")
        }
    }
    return EER;
};

function findDRI(eer, weight, email) {
    let lowFat = (eer * .20)/9;
    let highFat = (eer * .35)/9;
    let lowCarb = (eer * .45)/4;
    let  highCarb = (eer * .65)/4;
    let pro = (weight/2.20462) * 0.8;
    let sugar = (eer * .05)/4; 

    let goals = {
        Email: email,
        LowFat: lowFat.toFixed(0),
        HighFat: highFat.toFixed(0),
        LowCarb: lowCarb.toFixed(0),
        HighCarb: highCarb.toFixed(0),
        Protein: pro.toFixed(0),
        Sodium: 2300,
        Sugar: sugar.toFixed(0)
    };
    return goals;
};

let CurrentUser = null;


module.exports = {
    User, DRI, Exercises, Food, AddedExercise, AddedFood, Friends, ExerciseLog,
    Posts, ExerciseType, CurrentDRI, cDate, ProfileInfo, findBMI, currentDRI, currentDRI2, Logout,
    AddExercise, AddFood, AddNewEx, AddNewFood, AddNewUser, ChangeCurrent, SubmitChanges,
    RemoveExercise, currentDate, findPA, findEER, findDRI, CurrentUser, getUserExercises, getUserFood,
    Login(email, password) {
        const user = User.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong password');
    
        this.CurrentUser = user;
        return user;
    },
    GetUser(userId) {
        return User[userId];
    }

};