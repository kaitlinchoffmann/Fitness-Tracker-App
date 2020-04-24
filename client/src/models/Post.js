import myFetch from "./myFetch";

export let posts = null;

export async function shareProgress(progress) {
    const newPosts = await myFetch('/user/share', { progress });
    return posts = newPosts;
}

export let updatedPosts = null;

export async function getPosts() {
    const posts = await myFetch('/user/getPosts');
    console.log(posts);
    return updatedPosts = posts; 
}