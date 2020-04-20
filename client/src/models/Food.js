import myFetch, { User } from "./myFetch";

export let AddedFood = [];

export async function getFood(currentEmail) {
    const food = await myFetch('/user/getFood', { currentEmail });
    return AddedFood = food;
}

export async function addFood(foodList) {
    const addFood = await myFetch('/user/newFood', { foodList });

    return AddedFood = addFood;
}