 //export { CurrentUser } from "./Users";
 export { CurrentDRI } from "./Settings";

 export let CurrentUser = {
    Email: 'jill123@fakemail.com',
    Name: 'Jill', 
    Age: 31,
    Password: 'password',
    Height: 63,
    Weight: 123,
    Activity: "active",
    Sex: "Female",
    Goal: "maintain",
    Picture: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    Status: 'Getting those gains!!!',
    IsAdmin: false
};

 export const User = [
    {
        Email: 'jill123@fakemail.com',
        Name: 'Jill', 
        Age: 31,
        Password: 'password',
        Height: 63,
        Weight: 123,
        Activity: "active",
        Sex: "Female",
        Goal: "maintain",
        Picture: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        Status: 'Getting those gains!!!',
        IsAdmin: false
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
        Goal: "gainOne",
        Picture: 'https://media.wired.com/photos/5932b220f682204f736975f0/4:3/w_660,c_limit/ff_cats_f.jpg',
        Status: "I'm the Admin!!",
        IsAdmin: true
    }   
];


// import myFetch from "./myFetch";

// export let CurrentDRI = null;

// export function Init() {
//     myFetch('/user/getDri')
//         .then(x => {
//             CurrentDRI = x;
//             console.log("HELO!");
//             console.log(x);
//         });
// }

