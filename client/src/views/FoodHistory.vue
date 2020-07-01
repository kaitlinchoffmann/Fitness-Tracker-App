<template>
  <div class="container"> 
    <div class="container history-drop">
      <div class="dropdown is-hoverable" style="width:300px;">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
            <span>Pick a Past Log </span><br>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content has-text-centered">
            <div class="dropdown-item" v-for="x in allDates" :key="x.dates" id:x.dates>
              <a @click="findRecent(x)">{{x}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        <h1 id="history-title" class="title is-1 has-text-left">Food History</h1>
        <nav class="has-text-centered">
            <router-link to="/food">Add a Food Item</router-link>
        </nav>
        <div class="section">
       <div class="box table" style="max-width: 900px; margin:auto;">
                <div id="none"></div>
        <table class="table" style="margin:auto;">
               <caption> <h4 class="title is-4">Logged Food For: {{history[0].date}}</h4></caption>
                  <thead>
                    <tr>
                      <th>Food</th>
                      <th>Group</th>
                      <th>Calories</th>
                      <th>Protein(g)</th>
                      <th>Carbs(g)</th>
                      <th>Fat(g)</th>
                      <th>Sodium(mg)</th>
                      <th>Sugar(g)</th>
                    </tr>
                  </thead> 
                  <tbody>
                  <tr class="" v-for="(x) in history" :key="(x.date)">  
                      <td>{{x.food}}</td>
                      <td>{{x.group}}</td> 
                      <td>{{x.calories}}</td>
                      <td>{{x.protein}}</td>
                      <td>{{x.carbs}}</td>
                      <td>{{x.fat}}</td>
                      <td>{{x.sodium}}</td>
                      <td>{{x.sugar}}</td>
                  </tr>
                  </tbody><br/>
                  <div v-if="history[0].food != null && shared == false">
                    <button id="share" class="button is-light" @click="share">Share with Friends</button>
                  </div>
                  <div v-else-if="history[0].food == null">
                    <router-link to="/food" class="button is-light">Start Logging to Share!</router-link>
                  </div>
                  <div v-else>
                    Progress Shared!
                  </div>
        </table>
        </div><br/>
        <div class="box table" style="max-width:500px;margin:auto;">
        <table class="table has-text-centered"> 
          <caption><h4 class="title is-4">Daily Summary</h4></caption>
            <thead>  
            <tr>
              <th></th>
              <th>Goal</th>
              <th>Consumed</th>
              <th>Remaining</th>  
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Calories</td>  
              <td>{{calories}}</td>
              <td>{{nutrition[0]}}</td>
              <td>{{goalsLeft[0]}}</td>  
            </tr>
            <tr>
              <td>Protein(g)</td>  
              <td>{{User.CurrentUser.DRI.Protein}}</td>
              <td>{{nutrition[1]}}</td>
              <td>{{goalsLeft[1]}}</td>  
            </tr>
            <tr>
              <td>Carbs(g)</td>  
              <td>{{User.CurrentUser.DRI.LowCarb}} - {{User.CurrentUser.DRI.HighCarb}}</td>
              <td>{{nutrition[3]}}</td>
              <td>{{goalsLeft[3]}}</td>  
            </tr>
            <tr>
              <td>Fat(g)</td>  
              <td>{{User.CurrentUser.DRI.LowFat}} - {{User.CurrentUser.DRI.HighFat}}</td>
              <td>{{nutrition[2]}}</td>
              <td>{{goalsLeft[2]}}</td>  
            </tr>
            <tr>
              <td>Sodium(mg)</td>  
              <td>{{User.CurrentUser.DRI.Sodium}}</td>
              <td>{{nutrition[4]}}</td>
              <td>{{goalsLeft[4]}}</td>  
            </tr>
            <tr>
              <td>Sugar(g)</td>  
              <td>{{User.CurrentUser.DRI.Sugar}}</td>
              <td>{{nutrition[5]}}</td>
              <td>{{goalsLeft[5]}}</td>  
            </tr>
            </tbody>
        </table>
        </div>
        <div style="margin-bottom:200px;"></div>
        </div> 
    </div>
</template>

<script>
import { currentDate } from "../models/Date";
import User from "../models/Users";
import { AddedFood, getFood } from "../models/Food";
import { shareFood, getFoodPosts } from "../models/Post";
currentDate();

export default {
    name: 'FoodHistory',
    
    data:()=>({
        User, 
        AddedFood,
        history: [{
            date: currentDate()
        }],
        allDates: [],
        nutrition: [0,0,0,0,0,0],
        calories: User.CurrentUser.EER.toFixed(0),
        goalsLeft: [ User.CurrentUser.EER.toFixed(0), User.CurrentUser.DRI.Protein, User.CurrentUser.DRI.HighFat, User.CurrentUser.DRI.HighCarb, User.CurrentUser.DRI.Sodium, User.CurrentUser.DRI.Sugar],
        shared: false
    }),
    mounted:function(){
        this.findRecent(currentDate());
        this.findDates();
    },
    methods: { 
        currentDate() {
            let current = new Date();
            let day = String(current.getDate()).padStart(2, '0');
            let month = String(current.getMonth()+ 1).padStart(2, '0');
            let year = current.getFullYear();
            current = year + '-' + month + '-' + day; //if not in this format, findRecent() won't work
            return current;
        },
        findRecent(date) {
            this.shared = false;
            if(AddedFood != null) {
                let nutri = [0,0,0,0,0,0];
                let hist = [];
                let his = AddedFood.map(function(x, index) {
                    if(x.date == date && x.email == User.CurrentUser.Email) {
                        hist.push(AddedFood[index]);
                        nutri[0] += AddedFood[index].calories;
                        nutri[1] += AddedFood[index].protein;
                        nutri[2] += AddedFood[index].fat;
                        nutri[3] += AddedFood[index].carbs;
                        nutri[4] += AddedFood[index].sodium;
                        nutri[5] += AddedFood[index].sugar;
                    }
                });
                if(hist.length != 0) {
                    document.getElementById("none").innerHTML="";
                    this.findRemain(nutri[0],nutri[1],nutri[2],nutri[3],nutri[4],nutri[5]);
                    this.nutrition = nutri;
                    this.history = hist;
                    return this.history;
                }
                else {
                    document.getElementById("none").innerHTML="No food logged today ";
                    this.nutrition = [0,0,0,0,0,0];
                    this.findRemain(0,0,0,0,0,0);
                    this.history = [{ date: currentDate() }];
                }
            }
            else {
                document.getElementById("none").innerHTML="No food logged today ";
                this.nutrition = [0,0,0,0,0,0];
                this.findRemain(0,0,0,0,0,0);
                this.history = [{ date: currentDate() }];
            }
        },
        findDates() {
            let dates = [currentDate()];
            let date = AddedFood.map(function(x, index) {
                if(dates.find(x => (x == AddedFood[index].date))) {
                     x=true;
                }
                else {
                     dates.push(AddedFood[index].date);
                }

        });
            let datesDesc = this.sortDates;
            this.allDates = dates.sort(datesDesc);
            return this.allDates;
        },
        sortDates(d1, d2){
          if(d1 > d2) return -1;
          if(d1 < d2) return 1;
          return 0;
        },
        findRemain(cal, p, f, car, so, su) {
            let cals = this.calories - cal;
            let pro = this.User.CurrentUser.DRI.Protein - p;
            let fat = this.User.CurrentUser.DRI.HighFat - f;
            let carb = this.User.CurrentUser.DRI.HighCarb - car;
            let sod = this.User.CurrentUser.DRI.Sodium - so;
            let sug = this.User.CurrentUser.DRI.Sugar - su;

            this.goalsLeft[0] = cals;
            this.goalsLeft[1] = pro;
            this.goalsLeft[2] = fat;
            this.goalsLeft[3] = carb;
            this.goalsLeft[4] = sod;
            this.goalsLeft[5] = sug;
              
            return this.goalsLeft;
        },
        async share() {
          await shareFood(this.history);
          await getFoodPosts();
          // this.AddedFood = await getFood();
          this.shared = true;
        }
    }
} 
</script>

<style scoped>

.history-drop {
  float:left;
  margin-left:17%;
}

table,th,td {
  margin: auto;
}

#dropdown-menu4 {
  max-height:150px;
  overflow-y:scroll;
}

.dropdown-content {
  border: 1px solid lightgrey;
}

.dropdown-menu {
  min-width: 10rem;
}

a {
  color: #ffae00;
}

a:visited {
  color: #ffae00;
}

a:hover {
  color: #ff7b00;
}

a:active {
  color: #ff7b00
}

@media(max-width: 1250px) {
 .history-drop {
   float: none;
   display: block;
   margin: auto;
   margin-left: 10px;
 }

 #history-title.has-text-left {
    text-align: center !important;
 }
}
    
</style>