
export let cDate = null;

export function currentDate() {
    let current = new Date();
    let day = String(current.getDate()).padStart(2, '0');
    let month = String(current.getMonth()+ 1).padStart(2, '0');
    let year = current.getFullYear();
    current = year + '-' + month + '-' + day; //if not in this format, findRecent() won't work
    cDate = current;
    return current;
};

// export const ExerciseLog = [ /* Maybe create a function for this*/
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

// export const Posts = [
//     {
//         Email: 'jill123@fakemail.com',
//         Post: 'Fun day at the gym!',
//         Date: '02/27/2020' 
//     },
//     {
//         Email: 'jill123@fakemail.com',
//         Post: "I'm Beat today, so sleepy..",
//         Date: '02/24/2020'
//     }
// ];



