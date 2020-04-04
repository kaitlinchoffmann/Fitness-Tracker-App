<template>
    <div class="container">
        <h1 class="title is-1">Hi, {{User.CurrentUser.Name}}</h1>
        <div class="section">
        <div class="box">   
            <div id="exists"></div>
            <h4 class="title is-4">Add New Exercise</h4>
            <input class="input" type="text" placeholder="exercise name" v-model="exercise"><br/><br/>
            <input class="input" type="text" placeholder="exercise type" v-model="type"><br/><br/>
            <button class="button is-primary is-light" @click="addExercise()" >Add</button>
        </div>
        <div class="box">  
            <div id="exists2"></div> 
            <h4 class="title is-4">Add New Food</h4>
            <input class="input" type="text" placeholder="food name" v-model="food"><br/><br/>
            <input class="input" type="text" placeholder="food group" v-model="group"><br/><br/>
            <button class="button is-primary is-light" @click="addFood()" >Add</button>
        </div>
                <div style="margin-bottom:510px;"></div>
        </div>
        
    </div>
</template>

<script>
import { Exercises, AddNewEx, Food, AddNewFood } from '../models/Profile';
import User from "../models/Profile";

export default {
    data:()=>({
        User,
        Exercises,
        Food,
        exercise: '',
        type: '',
        food: '',
        group: ''
    }),
    methods: {
        addExercise() {
            AddNewEx(this.exercise, this.type);
            this.exercise = '';
            this.type = '';
        },
        addFood() {
            AddNewFood(this.food, this.group);
            this.food = '';
            this.group = '';
        }
    }
    
}
</script>

<style scoped>
    .box {
        width: 500px;
        float: left;
        margin-left: 8%;
    }
</style>