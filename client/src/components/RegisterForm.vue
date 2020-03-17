<template>
  <div>
    <div class="container">  
      <h1 class="block title is-2"><router-link id="main" to="/">Healthy Habits</router-link></h1>
    <div>
      <img src="../assets/food.png" alt="Healthy Food" class="my-tiny-image">
    </div>
    </div>
    <div class="container">      
        <form class="box" style="max-width:500px;margin:auto;" @submit.prevent="register">
          {{error}}
          <h3 class="title is-3 has-text-centered fcolor">Register</h3><hr>
          <div class="field">    
            <label class="label fcolor">Name</label>  
            <div class="control">  
              <input type="text" class="input" v-model="name">
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Email</label>  
            <div class="control">  
              <input type="email" class="input" v-model="email">
            </div>
          </div>
           <div class="field">    
            <label class="label fcolor">Age</label>  
            <div class="control">  
              <input type="number" class="input" v-model="age">
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Height(inches)</label>  
            <div class="control">  
              <input type="number" class="input" v-model="height">
            </div>
          </div>
           <div class="field">    
            <label class="label fcolor">Weight(lbs)</label>  
            <div class="control">  
              <input type="number" class="input" v-model="weight">
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Sex</label>  
            <div class="control">  
              <input type="text" class="input" v-model="sex">
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Activity</label>  
            <div class="control">  
              <input type="text" class="input" v-model="activity">
            </div>
          </div>
          <div class="field">
          <label class="label fcolor">Password</label>
          <div class="control">
            <input type="password" class="input" v-model="password">  
          </div>
          </div>
          <div class="field">
            <label class="label fcolor">Confirm Password</label>
            <div class="control">
              <input type="password" class="input" v-model="cpassword">  
            </div>
            </div>
          <div class="field">
            <input class="button" type="submit" value="Sign Up">  
          </div>
        </form>
  </div>  
  </div>
</template>

<style>

h3.fcolor, label.fcolor {
  color: slateblue;
}

#main:hover {
    color: #503cd1; 
}

.button {
  background-color: slateblue;
  color: white;
}

.button:visited {
  background-color: slateblue;
  color: white;  
}

.button:hover {
  color: white;
  background-color: #503cd1;
}

.button:focus{
  color: white;
  background-color: #503cd1;
}

.my-tiny-image {
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: block;
  width: 150px; 
}

h1.title, p.subtitle, #main {
  color: slateblue;
  text-align: center;
  margin-top: 40px;
  text-shadow: 4px 4px 4px lightblue;
}

</style>

<script>
import { AddNewUser, CurrentUser, findBMI, ChangeCurrent, User, findEER } from "../models/Profile";
ChangeCurrent();

export default {
  data(){
    return {
      User,
      CurrentUser,
      email: '',
      name: '',
      age: '',
      password: '',
      cpassword: '',
      height: '',
      weight: '',
      activity: '',
      sex: '',
      eer: '',
      picture: '',
      Status: '',
      IsAdmin: false,
      error: '',
      user: []
    }
  },
  methods: {
    register() {
      try {
        this.user = {
            Email: this.email,
            Name: this.name,
            Age: this.age,
            password: this.password,
            Height: this.height,
            Weight: this.weight,
            Activity: this.activity,
            Sex: this.sex,
            EER: findEER(this.age, this.weight, this.height, this.activity, this.sex),
            Picture: this.picture,
            BMI: findBMI(this.weight, this.height),
            Status: '',
            IsAdmin: false
            };

        AddNewUser(this.user, this.email, this.name, this.age, this.password, this.height, this.weight, this.activity, this.sex);
        ChangeCurrent(this.user);
        this.$router.push('/profile');
      } catch(error) {
        this.error = error;
      }
    }
  }
}
</script>