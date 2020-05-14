import myFetch from "./myFetch";

export async function addFriend(friend) {
    await myFetch('/friend/addFriend', {friend});
}

export let allFriends = null;

export async function getFriends() {
    const friends = await myFetch('/friend/getFriends');
    return allFriends = friends; 
}

export async function sendRequest(friendID, userPicture, userName) {
    await myFetch('/friend/sendRequest', { friendID, userPicture, userName });
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

export let friend = null;

export async function deleteFriend(friendID) {
    const friends = await myFetch('/friend/deleteFriend', {friendID});
    return friend = friends;
}

export let friendSearch = null;

export async function findFriend(friend) {
    const found = await myFetch('/friend/typeAHead', {friend});
    return friendSearch = found;
}

//Below is me trying a GET request
export async function findFriend2() {
    const found = await myFetch('/friend/typeAHead/:friend');
    return friendSearch = found;
}