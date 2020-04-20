import myFetch, { User } from "./myFetch";

export let AddedExercise = [];

export async function getExercise(currentEmail) {
    const exercise = await myFetch('/user/getExercise', { currentEmail });
    return AddedExercise = exercise;
}

export async function addExercise(exerciseList) {
    const addExercise = await myFetch('/user/newExercise', { exerciseList });

    return AddedExercise = addExercise;
}