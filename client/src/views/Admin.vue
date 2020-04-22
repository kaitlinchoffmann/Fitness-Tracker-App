<template>
    <div class="container">
        <h1 class="title is-1">Hi, {{User.CurrentUser.Name}}</h1>
        <div class="section">
        <div class="box">   
            {{error.message}}
            <div id="addSuccess"></div>
            <div id="exists"></div>
            <h4 class="title is-4">Add New User/Staff</h4>
            <label for="user name">User/Staff Name</label>
              <input class="input" type="text" placeholder="user name" v-model="name"><br/><br/>
            <label for="user email">User/Staff Email</label>
              <input class="input" type="text" placeholder="user email" v-model="email"><br/><br/>
            <label for="password">Create Password</label>
              <input class="input" type="text" placeholder="create password" v-model="password"><br/><br/>
            <label>Admin Capability</label><br/>  
              <input type="radio" value="true" id="true" v-model="isAdmin">
            <label for="true">True</label><br/>
              <input type="radio" value="false" id="false" v-model="isAdmin">
            <label for="false">False</label><br/><br/>
            <button class="button is-primary is-light" @click="addNewUser()" >Add</button>
        </div>

        <div class="box">  
            {{error.message}} 
            <div id="banSuccess"></div>
            <div id="exists"></div>
            <h4 class="title is-4">Ban User/Staff</h4>
            <label for="user">User/Staff email</label>
              <input class="input" type="text" placeholder="user email" v-model="bannedEmail"><br/><br/>
            <button class="button is-primary is-light" @click="banUser()" >Ban</button>
        </div>



        <!-- if have time: -->
        <!-- <div class="box">   
            <div id="exists"></div>
            <h4 class="title is-4">Ban User</h4>
            <input class="input" type="text" placeholder="exercise name" v-model="exercise"><br/><br/>
            <input class="input" type="text" placeholder="exercise type" v-model="type"><br/><br/>
            <button class="button is-primary is-light" @click="addExercise()" >Add</button>
        </div>
        <div class="box">   
            <div id="exists"></div>
            <h4 class="title is-4">Edit User/Staff</h4>
            <input class="input" type="text" placeholder="exercise name" v-model="exercise"><br/><br/>
            <input class="input" type="text" placeholder="exercise type" v-model="type"><br/><br/>
            <button class="button is-primary is-light" @click="addExercise()" >Add</button>
        </div> -->


        <!-- <div class="box">   
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
        </div> -->
                <div style="margin-bottom:510px;"></div>
        </div>
        
    </div>
</template>

<script>
// import { Exercises, AddNewEx, Food, AddNewFood } from '../models/Profile';
import User from "../models/Users";
import { RegisterUser, BanUser, bannedUser} from "../models/Admin";

export default {
    data:()=>({
        User,
        addedUser: '',
        bannedUser: '',
        email: '',
        bannedEmail: '',
        name: '',
        password: '',
        isAdmin: '',
        error: ''
        // Exercises,
        // Food,
        // exercise: '',
        // type: '',
        // food: '',
        // group: ''
    }),
    methods: {
        async addNewUser() {
            try {
                this.addedUser = await RegisterUser(this.email, this.name, this.password, this.isAdmin); 
                document.getElementById("addSuccess").innerHTML = this.addedUser.Name + " Successfully Added!";
                console.log("Account for " + this.addedUser.Name + " created!");
                this.email = '';
                this.name = '';
                this.password = '';
                this.isAdmin = '';
            } catch (error) {
                this.error = error;
            }
        },
        async banUser() {
            try {
                this.bannedUser = await BanUser(this.bannedEmail); 
                document.getElementById("banSuccess").innerHTML = bannedUser.Name + " Successfully Banned!";
                console.log("Account for " + this.bannedUser.Name + " banned!");
                this.bannedEmail = '';
            } catch (error) {
                this.error = error;
            }
        }

        
        // addExercise() {
        //     AddNewEx(this.exercise, this.type);
        //     this.exercise = '';
        //     this.type = '';
        // },
        // addFood() {
        //     AddNewFood(this.food, this.group);
        //     this.food = '';
        //     this.group = '';
        // }
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