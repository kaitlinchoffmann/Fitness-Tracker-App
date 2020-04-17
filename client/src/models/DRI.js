import { CurrentUser } from "./Users";
import myFetch from "./myFetch";

export let currentDri = null;

export async function currentDRI() {

    const cDRI = await myFetch('/user/cDri', { }) ;

    return currentDri = cDRI;
}

// export let State = {};

// export function driInit(){
//     myFetch('/user')
//         .then(x=> { 
//             State = x;
//             console.log(x);
//         });
// }