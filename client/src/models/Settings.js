import myFetch from "./myFetch";

export let CurrentDRI =  null;

export async function SubmitChanges(changes) {
    const newChanges = await myFetch('/dri/makeChanges', { changes }) ;
    return CurrentDRI = newChanges;
}

export let CurrentUser = null;

export async function currentUser() {

    const cUser = await myFetch('/user/currentUser') ;

    return CurrentUser = cUser;
}