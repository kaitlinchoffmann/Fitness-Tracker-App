import myFetch from "./myFetch";

export let allSearches = null;

export async function getUsers(userSearched) {
    const users = await myFetch('/user/getUser', { userSearched });
    return allSearches = users;
}

export async function addFriend(friend, userId) {
    await myFetch('/user/addFriend', {friend, userId});
}

export let allFriends = null;

export async function getFriends(userID) {
    const friends = await myFetch('/user/getFriends', { userID });
    console.log(friends);
    return allFriends = friends; 
}

export async function sendRequest(friendID, userID) {
    await myFetch('/user/sendRequest', { friendID, userID });
}

export let SentRequests = null;

export async function getSentRequests(userID) {
    const requests = await myFetch('/user/getSentRequests', { userID });
    return SentRequests = requests;
}

export let PendingRequests = null;

export async function getPendingRequests(userID) {
    const requests = await myFetch('/user/getPendingRequests', { userID });
    return PendingRequests = requests;
}