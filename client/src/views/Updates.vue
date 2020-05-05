<template>
<div class="container">
    <div class="section">
      <h3 class="title is-3">Shared Progress</h3>  
        <h2 class="title is-2 has-text-left">
          {{User.CurrentUser.Name}}     
        </h2>
        <div >
          <img style="margin-left:3%" :src="User.CurrentUser.Picture" class="card-image" id="update-pic"/>
        </div><br/>
        <div style="float:left;">
          <h4 class="title is-4">Shared Exercises</h4><br/>
          <div v-if="updatedPosts.length > 0">
            <div v-for="(x,ind) in updatedPosts" :key="x.date" id:x.date>
              <table id="exercise-post" class="table">
                <caption class="title is-5">Date: {{x.date}}</caption>
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
            </div>
          <div class="box" v-else>
            You haven't shared any exercises yet!
          </div>
        </div>

        <div style="float:right;">
          <h4 class="title is-4">Shared Food</h4><br/>
          <div v-if="updatedFood.length > 0">
            <div v-for="(x,ind) in updatedFood" :key="x.date" id:x.date>
              <table id="food-post" class="table">
                <caption class="title is-5">Date: {{x.date}}</caption>
                <thead>
                  <tr>
                    <th>Food</th>
                    <th>Group</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                    <th>Sugar</th>
                    <th>Sodium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="x in updatedFood[ind].data" :key="x.food" id:x.food>
                    <td>{{x.food}}</td>
                    <td>{{x.group}}</td>
                    <td>{{x.calories}}</td>
                    <td>{{x.protein}}</td>
                    <td>{{x.carbs}}</td>
                    <td>{{x.fat}}</td>
                    <td>{{x.sugar}}</td>
                    <td>{{x.sodium}}</td>
                  </tr>  
                </tbody>
              </table><br/>
              </div>
            </div>
          <div class="box" v-else>
            You haven't shared any food yet!
          </div>
        </div><br/><br/>

        <div style="margin-bottom:550px;"></div>
    </div>
</div>
    
</template>

<script>
import User from "../models/Users";
import { getPosts, getFoodPosts, posts, updatedPosts, updatedFood } from "../models/Post";
import { allFriends } from "../models/Friends";

export default {
  name: 'Updates',

    data:()=>({
        User,
        updatedPosts,
        updatedFood,
        allFriends
    }),
    mounted:function() {
        this.getAllPosts();
    },
    methods: {
        async getAllPosts() {
          //get exercise posts
            this.updatedPosts = await getPosts();
            let datesDesc = this.sortDates;
            this.updatedPosts = this.updatedPosts.sort(datesDesc);
          //get food posts
            this.updatedFood = await getFoodPosts();
            let datesDesc2 = this.sortDates;
            this.updatedFood = this.updatedFood.sort(datesDesc2);
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
table#exercise-post.table {  
 border-radius: 10px;
}

table#food-post.table { 
 border-radius: 10px; 
}

#exercise-post th, #exercise-post td {
  padding:15px;
}

#food-post th, #food-post td {
  padding:15px;
}

h5.header {
  color: black;

}

</style>
