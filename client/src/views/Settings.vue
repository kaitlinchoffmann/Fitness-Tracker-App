<template>
  <div class="container"> 
    <h1 class="title is-1">Profile Settings</h1>
    <div class="section">
     <form id="settings-form" @submit.prevent="submitChanges">
          {{error.message}}
     <div class="box" id="settings">
      <h4 class="title is-4 has-text-centered">Edit Your Account</h4>    
      <hr>     
      <h6 class="title is-6 has-text-left">
          Name:
          <input type="text" id="info" class="input is-small" v-model="User.CurrentUser.Name">
      </h6> 
      <h6 class="title is-6 has-text-left">
           Profile Photo:
        <img :src="User.CurrentUser.Picture" class="card-image" id="settings-pic"/> <button class="button is-small btn-post">Edit</button>
      </h6> 
      <h6 class="title is-6 has-text-left">
           Email: 
           <input type="email" id="info" class="input is-small" v-model="User.CurrentUser.Email">
      </h6> 
      <h6 class="title is-6 has-text-left">
           Age: 
           <input type="number" min="0" max="150" id="info" class="input is-small" v-model="User.CurrentUser.Age">
      </h6>
      <h6 class="title is-6 has-text-left">
           Sex:<br/>      
           <input type="radio" value="male" id="male" v-model="User.CurrentUser.Sex">
           <label for="male" id="info"> Male</label><br/>
           <input type="radio" value="female" id="female" v-model="User.CurrentUser.Sex">
           <label for="female" id="info"> Female</label>    
     </h6> 
      <h6 class="title is-6 has-text-left">
           Height (inches): 
           <input type="text" id="info" class="input is-small" v-model="User.CurrentUser.Height">
      </h6>           
      <h6 class="title is-6 has-text-left">
           Weight (pounds): 
           <input type="text" class="input is-small" v-model="User.CurrentUser.Weight">
      </h6> 
      <h6 class="title is-6 has-text-left">
           Goal: 
           <select id="activity" v-model="User.CurrentUser.Goal"> 
                <option value="loseOne" id="info">Lose 1 Pound per Week</option>
                <option value="loseTwo" id="info">Lose 2 Pounds per Week</option>
                <option value="maintain" id="info">Maintain Weight</option>
                <option value="gainOne" id="info">Gain 1 Pound per Week</option>
                <option value="gainTwo" id="info">Gain 2 Pounds per Week</option>
           </select>
      </h6> 
      <h6 class="title is-6 has-text-left">
           Activity Level: 
           <select id="activity" v-model="User.CurrentUser.Activity"> 
                <option value="sedentary">Sedentary</option>
                <option value="low">Low</option>
                <option value="active">Active</option>
           </select>
      </h6>
      <hr> 
      </div>
      <button class="button is-warning" id="sub" @click="submitChanges">Submit Changes</button>
     </form>
        <div style="margin-bottom:100px;"></div>
     </div> 
  </div>
</template>

<script>
import { SubmitChanges, currentUser } from "../models/Settings"
import User from "../models/Users";

export default {
    name: 'Settings',

    data:()=>({
        User, 
        error: ''
    }),
        methods: {
          edit() {

          },
          async submitChanges() {
            try {        
               await SubmitChanges(User.CurrentUser);  
               this.User.CurrentUser = await currentUser();   
              
               this.$router.push('/profile');
            }
            catch(error) {
                 console.log(error);
                 this.error = error;
            }
          }
        }
}

</script>

<style>
#settings-pic {
  max-width: 250px;
}

#settings.box {
     max-width: 550px;
}

#settings-form {
     margin: auto;
     max-width: 550px;
}

#sub {
  display: block;
  margin: auto;
  max-width: 550px;
  min-width:300px;
}

h6.title {
     line-height: 1.6;
}
#info {
     font-size: 14px;
}

</style>