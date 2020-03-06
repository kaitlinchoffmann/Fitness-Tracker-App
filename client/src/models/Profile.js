//const

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
        Name: 'Jack',
        Picture: 'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale',
        Status: 'Taking a break!'
    }
];

export const ExerciseLog = [ /* Maybe create a function for this*/
    {
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
        Post: 'Fun day at the gym!',
        Date: '02/27/2020' 
    },
    {
        Post: "I'm Beat today, so sleepy..",
        Date: '02/24/2020'
    }
]

//let

export let CurrentUser = null;


//functions

export function findBMI(weight, height) {
    var bmi = (weight/(height * height)) * 703;
    return bmi.toFixed(2);
};

export function Login(email, password) {
    const user = User.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong password');
    ;
    CurrentUser = user;

    return CurrentUser;
}


/* psuedo-code 
function exercise(type) {
    if(type=='Strength') {
        Ask for user input: how many reps, sets(super sets?), did you use weight(s)(if so, how many), minutes, intensity
    } else if (type='cardo' || type='flexibily') {
        Ask: how many minutes, intensity (only have light, moderate, hard)
    } else if (other) {
        Ask: minutes, intensity, ...
    }
} 
*/

