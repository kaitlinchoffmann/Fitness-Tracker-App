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
          {{error.message}}
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
              <input type="number" class="input" min="0" max="150" v-model="age">
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Height(inches)</label>  
            <div class="control">  
              <input type="number" class="input" min="0" max="120" v-model="height">
            </div>
          </div>
           <div class="field">    
            <label class="label fcolor">Weight(lbs)</label>  
            <div class="control">  
              <input type="number" class="input" min="0" max="3000" v-model="weight">
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Sex</label>  
            <div class="control">  
              <input type="radio" value="male" id="male" v-model="sex">
              <label for="male"> Male</label><br/>
              <input type="radio" value="female" id="female" v-model="sex">
              <label for="male"> Female</label>
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Activity Level</label>  
            <div class="control"> 
              <select id="activity" v-model="activity"> 
                <option value="sedentary">Sedentary</option>
                <option value="low">Low</option>
                <option value="active">Active</option>
              </select>
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Goal</label>  
            <div class="control"> 
              <select id="goal" v-model="goal"> 
                <option value="loseOne">Lose 1 Pound per Week</option>
                <option value="loseTwo">Lose 2 Pounds per Week</option>
                <option value="maintain">Maintain Weight</option>
                <option value="gainOne">Gain 1 Pound per Week</option>
                <option value="gainTwo">Gain 2 Pounds per Week</option>
              </select>
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

export default {
  data(){
    return {
      User,
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
      goal: '',
      picture: 'https://www.seniorcatwellness.com/wp-content/uploads/2019/04/are-bananas-good-for-cats.jpg',
      Status: '',
      IsAdmin: false,
      error: '',
      user: []
    }
  },
  methods: { 
    async register() {
      try {
        await User.Register(this.email, this.name, this.age, this.password, this.cpassword, this.height, this.weight, this.activity, this.goal, this.sex);
        this.$router.push('/profile');
      } catch(error) {
        this.error = error;
      }
    }
  }
}
</script>