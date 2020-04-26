import myFetch from "./myFetch";

export async function addFriend(friend, userId) {
    await myFetch('/friend/addFriend', {friend, userId});
}

export let allFriends = null;

export async function getFriends() {
    const friends = await myFetch('/friend/getFriends');
    console.log(friends);
    return allFriends = friends; 
}

export async function sendRequest(friendID, userID, userPicture, userName) {
    await myFetch('/friend/sendRequest', { friendID, userID, userPicture, userName });
}

export let SentRequests = null;

export async function getSentRequests() {
    const requests = await myFetch('/friend/getSentRequests');
    return SentRequests = requests;
}

export let PendingRequests = null;

export async function getPendingRequests() {
    const requests = await myFetch('/friend/getPendingRequests');
    return PendingRequests = requests;
}