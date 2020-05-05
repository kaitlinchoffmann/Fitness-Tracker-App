import myFetch from "./myFetch";

export let posts = null;

export async function shareProgress(progress) {
    const newPosts = await myFetch('/update/share', { progress });
    return posts = newPosts;
}

export let foodPosts = null;

export async function shareFood(progress) {
    const newFood = await myFetch('/update/shareFood', { progress });
    return foodPosts = newFood;
}

export let updatedPosts = null;

export async function getPosts() {
    const posts = await myFetch('/update/getPosts');
    return updatedPosts = posts; 
}

export let updatedFood = null;

export async function getFoodPosts() {
    const posts = await myFetch('/update/getFoodPosts');
    return updatedFood = posts;
}

export let friendExPosts = null;

export async function getFriendPosts(friendId) {
    const posts = await myFetch('/update/getFriendPosts', { friendId });
    return friendExPosts = posts; 
}

export let friendFoodPosts = null;

export async function getFriendFood(friendId) {
    const posts = await myFetch('/update/getFriendFood', { friendId });
    return friendFoodPosts = posts; 
}