import myFetch, { User } from "./myFetch";

let CurrentDRI =  null;

export async function SubmitChanges(changes) {
    const newChanges = await myFetch('/user/makeChanges', { changes }) ;
    return CurrentDRI = newChanges;
}

let CurrentUser = null;

export async function currentUser() {

    const cUser = await myFetch('/user/currentUser') ;
    console.log(cUser);

    return CurrentUser = cUser;
}