import myFetch from "./myFetch";

export let AddedFood = [];

export async function getFood() {
    const food = await myFetch('/food/getFood');
    return AddedFood = food;
}

export async function addFood(foodList) {
    const addFood = await myFetch('/food/newFood', { foodList });

    return AddedFood = addFood;
}