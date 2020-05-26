import myFetch from "./myFetch";

let ob = {
    CurrentUser: null,
    async Login(email, password){
        const user = await myFetch('/user/login', { email, password });
        console.log(user._doc._id);
        return this.CurrentUser = user._doc;
    },
    async Logout() {
        const user = await myFetch('/user/logout');
        return this.CurrentUser = null;
    },
    async Register(email, name, age, pw, cpw, h, w, act, goal, sex){
        const newUser = await myFetch('/user/register', { email, name, age, pw, cpw, h, w, act, goal, sex });
        return this.CurrentUser = newUser._doc;
    }
}

export default ob;

export let allSearches = null;

export async function getUsers(userSearched) {
    const users = await myFetch('/user/getUser', { userSearched });
    return allSearches = users;
}

export let otherUser = null;

export async function getSingleUser(userClicked) {
    const user = await myFetch('/user/getSingleUser', { userClicked });
    return otherUser = user;
}




