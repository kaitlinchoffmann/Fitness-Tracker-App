<template>
<div class="container">
    <div class="section">
      <h3 class="title is-3">Exercises Shared by You</h3>  
        <h2 class="title is-2 has-text-left">
          {{User.CurrentUser.Name}}     
        </h2>
        <div style="float:left;margin-left:30px;">
          <img :src="User.CurrentUser.Picture" class="card-image" id="update-pic"/>
        </div>
        <div style="float:left;margin-left:7%;">
          <div v-if="updatedPosts.length > 0">
              <table class="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Exercise</th>
                    <th>Type</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Time(mins)</th>
                    <th>Intensity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="x in updatedPosts.slice().reverse()" :key="x.exName" id:x.exName>
                    <td>{{x.date}}</td>
                    <td>{{x.exName}}</td>
                    <td>{{x.exType}}</td>
                    <td>{{x.sets}}</td>
                    <td>{{x.reps}}</td>
                    <td>{{x.weight}}</td>
                    <td>{{x.time}}</td>
                    <td>{{x.intensity}}</td>
                  </tr>  
                </tbody>
              </table>
              <br/>
            </div>
          <div class="box" v-else>
            You haven't shared any exercises yet!
          </div>
        </div>
        <div style="margin-bottom:530px;"></div>
    </div>
</div>
    
</template>

<script>
import User from "../models/Users";
import { getPosts, shareProgress, posts, updatedPosts } from "../models/Post";
import { allFriends } from "../models/Friends";

export default {
    data:()=>({
        User,
        updatedPosts,
        allFriends
    }),
    mounted:function() {
        this.getAllPosts();
    },
    methods: {
        async getAllPosts() {
            this.updatedPosts = await getPosts();
        }
    }
}
</script>

<style>


</style>
