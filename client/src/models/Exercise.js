import myFetch, { User } from "./myFetch";

export let AddedExercise = [];

export async function getExercise() {
    const exercise = await myFetch('/exercise/getExercise');
    return AddedExercise = exercise;
}

export async function addExercise(exerciseList) {
    const addExercise = await myFetch('/exercise/newExercise', { exerciseList });

    return AddedExercise = addExercise;
}