<template>
  <div>
    <div class="container">
      <h1 class="block title is-2"><router-link id="main" to="/">
        Healthy Habits
      </router-link></h1>
    <div>
      <img src="../assets/food.png" alt="Healthy Food" class="my-tiny-image">
    </div>   
    </div> 
        <form class="box" style="max-width:500px;margin:auto;" @submit.prevent="login">
          {{error.message}}
          <h3 class="title is-3 has-text-centered fcolor">Login</h3><hr>
        <div class="field">    
            <label class="label fcolor">Email</label>  
            <div class="control">  
              <input type="email" class="input" placeholder="Email" v-model="email">
            </div>
        </div>
        <div class="field">
          <label class="label fcolor">Password</label>
          <div class="control">
            <input type="password" class="input" placeholder="Password" v-model="password">  
          </div>
        </div>
          <div class="field">
            <input class="button" type="submit" value="Login">  
          </div>
        </form> 
  </div>         
</template>

<style scoped>

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
import User from "../models/Users";
// import { currentDRI, CurrentDRI } from "../models/Users"
import { getFood } from "../models/Food";
import { getExercise } from "../models/Exercise";
import { getFriends, getSentRequests, getPendingRequests } from "../models/Friends";
import { getPosts, getFoodPosts } from "../models/Post";

export default {
  data(){
    return {
      email: '',
      password: '',
      error: '',
      User
    }
  },
  methods: {
    async login() {
      try {
        await User.Login(this.email, this.password);
        await getFood();
        await getExercise();//await getExercise(this.email);
        await getFriends();
        await getSentRequests();
        await getPendingRequests();
        await getPosts();
        await getFoodPosts();
        
        if(User.CurrentUser.IsAdmin == true) {
          this.$router.push('/admin');
         } 
         else { 
          this.$router.push('/profile');
         }
      } catch(error) {
        this.error = error;
      }
    }
  }
}
</script>