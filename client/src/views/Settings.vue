<template>
  <div class="container"> 
    <h1 class="title is-1">Profile Settings</h1>
    <div class="section">
        <form class="box">
      <h3 class="title is-3 has-text-left">
          Name:
          <input type="text" class="input" v-model="CurrentUser.Name">
      </h3> 
      <h3 class="title is-3 has-text-left">
        <img :src="CurrentUser.Picture" class="card-image" id="profile-pic"/> <button class="button is-small btn-post">Edit</button>
      </h3> 
      <h3 class="title is-3 has-text-left">
           Email: 
           <input type="text" class="input" v-model="CurrentUser.Email">
      </h3>  
      <h3 class="title is-3 has-text-left">
           Height: 
           <input type="text" class="input" v-model="CurrentUser.Height">
      </h3>           
      <h3 class="title is-3 has-text-left">
           Weight: 
           <input type="text" class="input" v-model="CurrentUser.Weight">
      </h3> 
      <h3 class="title is-3 has-text-left">
           BMI: {{CurrentUser.BMI}}
      </h3> 
     </form>
       <button class="button is-warning" @click="submitChanges">Submit</button>
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
            this.$router.push('/exercise');
          }
        }
}

</script>