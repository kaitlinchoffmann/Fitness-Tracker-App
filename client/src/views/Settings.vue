<template>
  <div class="container"> 
    <h1 class="title is-1">Profile Settings</h1>
    <div class="section">
        <form>
          <div class="box">
      <h4 class="title is-4 has-text-left">
          Name:
          <input type="text" class="input" v-model="CurrentUser.Name">
      </h4> 
      <h4 class="title is-4 has-text-left">
        <img :src="CurrentUser.Picture" class="card-image" id="settings-pic"/> <button class="button is-small btn-post">Edit</button>
      </h4> 
      <h4 class="title is-4 has-text-left">
           Email: 
           <input type="text" class="input" v-model="CurrentUser.Email">
      </h4> 
      <h4 class="title is-4 has-text-left">
           Age: 
           <input type="number" min="0" max="150" class="input" v-model="CurrentUser.Age">
      </h4>
      <h4 class="title is-4 has-text-left">
           Sex: 
      </h4>     
           <input type="radio" value="male" id="male" v-model="CurrentUser.Sex">
           <label for="male"> Male</label><br/>
           <input type="radio" value="female" id="female" v-model="CurrentUser.Sex">
           <label for="male"> Female</label>     
      <h4 class="title is-4 has-text-left">
           Height: 
           <input type="text" class="input" v-model="CurrentUser.Height">
      </h4>           
      <h4 class="title is-4 has-text-left">
           Weight: 
           <input type="text" class="input" v-model="CurrentUser.Weight">
      </h4> 
      <h4 class="title is-4 has-text-left">
           Activity Level: 
           <select id="activity" v-model="CurrentUser.Activity"> 
                <option value="sedentary">Sedentary</option>
                <option value="low">Low</option>
                <option value="active">Active</option>
           </select>
      </h4> 
       <hr>
      <h4 class="title is-4 has-text-left">
           BMI: {{CurrentUser.BMI}}
      </h4> 
      </div>
      <button class="button is-warning" id="sub" @click="submitChanges">Submit Changes</button>
     </form>
        <div style="margin-bottom:100px;"></div>
     </div> 
  </div>
</template>

<script>
import { AddExercise, RemoveExercise, CurrentUser, User, ExerciseType, currentDate, ProfileInfo, SubmitChanges } from "../models/Profile";

export default {
    name: 'Settings',

    data:()=>({
        ProfileInfo,
        User,
        CurrentUser,
        info: []
    }),
        methods: {
          edit() {

          },
          submitChanges() {
            SubmitChanges(this.CurrentUser);
            this.$router.push('/profile');
          }
        }
}

</script>

<style>
#settings-pic {
  width: 250px;
}

form {
  width: 500px;
  margin: auto;
}

#sub {
  width: 500px;
  margin: auto;
}

</style>