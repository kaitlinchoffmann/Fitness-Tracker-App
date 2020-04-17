import myFetch, { User } from "./myFetch";

export { CurrentDRI } from "./Profile";

let CurrentDRI = null;

export async function SubmitChanges(changes) {

    const newChanges = await myFetch('/user/makeChanges', { changes } ) ;

    console.log(newChanges);
    return CurrentDRI = newChanges;
}