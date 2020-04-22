import myFetch from "./myFetch";
import User from "./Users";

let CurrentDRI =  null;

export async function SubmitChanges(changes) {
    const newChanges = await myFetch('/dri/makeChanges', { changes }) ;
    console.log(newChanges);
    return CurrentDRI = newChanges;
}

let CurrentUser = null;

export async function currentUser() {

    const cUser = await myFetch('/user/currentUser') ;
    console.log(cUser);

    return CurrentUser = cUser;
}