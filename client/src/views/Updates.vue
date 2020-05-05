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
            <div v-for="(x,ind) in updatedPosts" :key="x.date" id:x.date>
              {{x.date}}
              <table class="table">
                <thead>
                  <tr>
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
                  <tr v-for="x in updatedPosts[ind].data" :key="x.exName" id:x.exName>
                    <td>{{x.exName}}</td>
                    <td>{{x.exType}}</td>
                    <td>{{x.sets}}</td>
                    <td>{{x.reps}}</td>
                    <td>{{x.weight}}</td>
                    <td>{{x.time}}</td>
                    <td>{{x.intensity}}</td>
                  </tr>  
                </tbody>
              </table><br/>
              </div>
              <!-- <br/>
              <div v-for="(x,ind) in updatedPosts" :key="x.date" id:x.date>
                Date: {{x.date}} -
                <div v-for="y in updatedPosts[ind].data" :key="y.exName" id:y.exName>
                  Name: {{y.exName}}
                </div>
              </div> -->

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
  name: 'Updates',

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
            let datesDesc = this.sortDates;
            this.updatedPosts = this.updatedPosts.sort(datesDesc);
        },
        sortDates(d1, d2){
          let date1 = d1.date;
          let date2 = d2.date;
          if(date1 > date2) return -1;
          if(date1 < date2) return 1;
          return 0;
        }
    }
}
</script>

<style>


</style>
