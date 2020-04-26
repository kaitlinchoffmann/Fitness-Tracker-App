import myFetch from "./myFetch";

export let posts = null;

export async function shareProgress(progress) {
    const newPosts = await myFetch('/update/share', { progress });
    return posts = newPosts;
}

export let updatedPosts = null;

export async function getPosts() {
    const posts = await myFetch('/update/getPosts');
    return updatedPosts = posts; 
}

export let friendPosts = null;

export async function getFriendPosts(friendId) {
    const posts = await myFetch('/update/getFriendPosts', { friendId });
    return friendPosts = posts; 
}