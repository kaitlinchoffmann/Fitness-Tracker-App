import myFetch from "./myFetch";

export let addedUser = null;

export async function RegisterUser(email, name, pw, isAd){
    const newUser = await myFetch('/user/registerUser', { email, name, pw, isAd });
    return addedUser = newUser;
}

export let bannedUser = null;

export async function BanUser(userEmail){
    const banUser = await myFetch('/user/banUser', { userEmail });
    return bannedUser = banUser;
}