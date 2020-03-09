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
        Status: 'Getting those gains!!!'
    }   
];

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

export let AddedExercise = {date: currentDate()};

export let AddedFood = {date: currentDate()};

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
    AddedExercise = exerciseList;
    return AddedExercise;
};

export function AddFood(foodList) {
    AddedFood = foodList;
    return AddedFood;
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


