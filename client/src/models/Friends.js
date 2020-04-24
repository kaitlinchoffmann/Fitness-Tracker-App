import myFetch from "./myFetch";

// export let allSearches = null;

// export async function getUsers(userSearched) {
//     const users = await myFetch('/user/getUser', { userSearched });
//     return allSearches = users;
// }

export async function addFriend(friend, userId) {
    await myFetch('/friend/addFriend', {friend, userId});
}

export let allFriends = null;

export async function getFriends(userID) {
    const friends = await myFetch('/friend/getFriends', { userID });
    console.log(friends);
    return allFriends = friends; 
}

export async function sendRequest(friendID, userID) {
    await myFetch('/friend/sendRequest', { friendID, userID });
}

export let SentRequests = null;

export async function getSentRequests(userID) {
    const requests = await myFetch('/friend/getSentRequests', { userID });
    return SentRequests = requests;
}

export let PendingRequests = null;

export async function getPendingRequests(userID) {
    const requests = await myFetch('/friend/getPendingRequests', { userID });
    return PendingRequests = requests;
}