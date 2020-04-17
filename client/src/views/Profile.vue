<template>
<div class="container profile">
  <div class = "section">
    <h2 class="title is-2 has-text-left">
      {{CurrentUser.Name}}     
    </h2>
    <div>
      <div style="float:left; margin-left:30px;">
        <img :src="CurrentUser.Picture" class="card-image" id="profile-pic"/>
        <div id="status" v-if="CurrentUser.Goal == 'maintain'">
         <span id="status-first">Goal:</span> Maintain Weight
        </div>
        <div id="status" v-else-if="CurrentUser.Goal == 'loseOne'">
          <span id="status-first">Goal:</span> Lose One Pound Per Week
        </div>
        <div id="status" v-else-if="CurrentUser.Goal == 'loseTwo'">
          <span id="status-first">Goal:</span> Lose Two Pounds Per Week
        </div>
        <div id="status" v-if="CurrentUser.Goal == 'gainOne'">
          <span id="status-first">Goal:</span> Gain One Pound Per Week
        </div>
        <div id="status" v-if="CurrentUser.Goal == 'gainTwo'">
          <span id="status-first">Goal:</span> Gain Two Pounds Per Week
        </div>
      </div>
          <div class="box" style="float:left;margin-left:7%;">
            <table class="table has-text-centered" style="width:300px;margin:auto;">
              <caption><h4 class="title is-4">Daily Food Goals</h4></caption>
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>{{CurrentUser.EER.toFixed(0)}}</td>
                </tr>
                <tr>
                  <td>Protein(g)</td>
                  <td>{{CurrentDRI.Protein}}</td>
                </tr>
                <tr>
                  <td>Carbs(g)</td>
                  <td>{{CurrentDRI.LowCarb}}-{{CurrentDRI.HighCarb}}</td>
                </tr>
                <tr>
                  <td>Fat(g)</td>
                  <td>{{CurrentDRI.LowFat}}-{{CurrentDRI.HighFat}}</td>
                </tr>
                <tr>
                  <td>Sodium(mg)</td>
                  <td>{{CurrentDRI.Sodium}}</td>
                </tr>
                <tr>
                  <td>Sugar(g)</td>
                  <td>{{CurrentDRI.Sugar}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="max-width:300px;max-height:200px;float:right;margin-right:5%;">
            <div class="box">
              <h4 class="title is-4">Daily Exercise Goals</h4>
                <p class="has-text-centered">30 minutes of moderate or vigorous exercise</p>
            </div>
          </div>
          <div class="section" style="width:350px;max-height:200px;float:left;margin-left:4%;">
            <div class="box">
              <h6 class="title is-6" id="status-first">Body Mass Index (BMI): <span id="bmi">{{User.CurrentUser.BMI}}</span></h6>
              <div v-if="CurrentUser.BMI < 18.5">
                <p>You are Underweight - A Normal BMI is between 18.5-24.9</p>
              </div>
              <div v-else-if="CurrentUser.BMI < 25">
                <p>You are Normal Weight</p>
              </div>
              <div v-else-if="CurrentUser.BMI < 30">
                <p>You are Overweight - A Normal BMI is between 18.5-24.9</p>
              </div>
              <div v-else-if="CurrentUser.BMI > 30">
                <p>You are Obese - A Normal BMI is between 18.5-24.9</p>
              </div>
            </div>
              <div id="note">*For how much of your goals you have remaining and completed, go to the Food and Exercise Tabs.</div>
          </div>  
        
         <!-- <h3 class="title is-3">Friends</h3> 
        <div class="section friends" v-for="friend in Friends" :key="friend.Name">
          <img :src="friend.Picture" class="tiny-image"> <br/>{{friend.Name}} - {{friend.Status}}
        </div> 
      </div> 
      
        <li class="card" id= "post" v-for="posts in Posts" :key="posts.Post">
          <div class="inner-post">{{posts.Post}}</div>
          <button class="button is-small btn-post">Like</button>
          <button class="button is-small btn-post">Comment</button>
        </li> -->
       
    </div> 
    <div style="margin-bottom:520px;"></div>          
  </div>
</div>
</template>

<script>
import { Friends, Posts, AddedExercise, AddedFood, ProfileInfo } from "../models/Profile";
import User from "../models/Profile";
import { CurrentDRI, CurrentUser} from "../models/Profile2";

export default {
    name: 'Profile',
    mounted:function(){
        this.findExercise(this.recentExercise);
        this.findFood(this.recentFood);
        this.findLastEx(this.recentExercise);
        this.findLastFood(this.recentFood);
    },
    data:()=>({
        ProfileInfo,
        User,
        CurrentUser,
        CurrentDRI,
        Friends,
        Posts, 
        AddedExercise,
        AddedFood,
        recentExercise: [],
        lastExercise: [],
        recentFood: [],
        lastFood: []
    }),
    methods: {
        findExercise(recent) {
            const userExercise = this.AddedExercise.map(function(x, index) {
                if(x.email == CurrentUser.Email) {
                    recent.push(AddedExercise[index]);
                }
            }
        )},
        findLastEx(recent) {
            this.lastExercise = recent[recent.length-1];
            return this.lastExercise;
        },
        findFood(recent) {
            const userFood = this.AddedFood.map(function(x, index) {
                if(x.email == CurrentUser.Email) {
                    recent.push(AddedFood[index]);
                }
            }
        )},
        findLastFood(recent) {
            this.lastFood = recent[recent.length-1];
            return this.lastFood;
        }
    }
} 
</script>

<style>
.card-image {
  max-width: 400px;
}

#post {
    width: 700px;
    margin-bottom: 40px;
    margin-left: 80px;
    list-style-type: none;
    padding: 30px;
}

#status {
  box-shadow: 0px 1px 5px lightgrey;
  padding: 10px;
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
}

#status-first {
  font-weight: bold;
  color: slateblue;
  font-size: 18px;
}

#bmi {
  color: #363636;
}

.btn-post {
  margin-top: 20px;
  margin-right: 10px;
}

.button {
  color: white;
  background-color: slateblue; 
}

.button:hover {
  color: white;
}

.btn-status {
  float:right;
}

.inner-post {
  
  padding: 20px;
  box-shadow: 0px 1px 5px lightgrey;
  background-color: whitesmoke;
}

.tiny-image {
  display: block;
  width: 300px; 
}

.friends {
  margin-top: 20px;
  margin-bottom: 40px;
  border-left: 1px solid lightgrey;
  padding: 10px;
}

.recent-ex {
  box-shadow: 0px 1px 5px lightgrey;
  padding: 30px;
}

#note {
  font-size: 12px;
}

h2.title, h5.title {
  color: slateblue;
  text-align: center;
  margin-top: 40px;
  text-shadow: 4px 4px 4px lightblue;
  margin-left: 30px;
}

</style>