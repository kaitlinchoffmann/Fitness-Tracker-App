<template>
    <div class="container">
        <h1 class="title is-1">Hi, {{User.CurrentUser.Name}}</h1>
        <div id="admin-functions" class="section">
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
                <div id="admin-space"></div>
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
    }
    
}
</script>

<style scoped>
.box {
    width: 500px;
    float: left;
    margin-left: 8%;
}

#admin-space {
    margin-bottom:550px;
}

@media(max-width: 1407px) {
 .box {
    width: 500px;
    float: none;
    margin: auto;
 }
 #admin-space {
    margin-bottom:100px;
 }
}
</style>