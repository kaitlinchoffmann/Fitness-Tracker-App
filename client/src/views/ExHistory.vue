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
        <h1 id="history-title" class="title is-1 has-text-left">Exercise History</h1>
         <nav class="has-text-centered">
            <router-link to="/exercise">Add an Exercise</router-link>
         </nav>
        <div class="section">
       <div class="box table" style="max-width: 800px; margin:auto;">
        <div id="none"></div>
        <table class="table" style="margin:auto;">
            <caption> <h4 class="title is-4">Logged Exercises For: {{history[0].date}}</h4></caption>
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
                  <tr class="" v-for="(x) in history" :key="(x.date)">  
                      <td>{{x.exName}}</td>
                      <td>{{x.exType}}</td> 
                      <td>{{x.sets}}</td>
                      <td>{{x.reps}}</td>
                      <td>{{x.weight}}</td>
                      <td>{{x.time}}</td>
                      <td>{{x.intensity}}</td>
                  </tr>
                  </tbody><br/>
                  <div v-if="history[0].exName != null && shared == false">
                    <button id="share" class="button is-light" @click="share">Share with Friends</button>
                  </div>
                  <div v-else-if="history[0].exName == null">
                    <router-link to="/exercise" class="button is-light">Start Logging to Share!</router-link>
                  </div>
                  <div v-else>
                    Progress Shared!
                  </div>
        </table> 
        </div><br/>
        <div id="daily-goal" class="box table">
        <table class="table has-text-centered"> 
          <caption><h4 class="title is-4">Daily Goal</h4></caption>
            <thead>  
            <tr>
              <th></th>
              <th>Goal</th>
              <th>Completed</th>
              <th>Remaining</th>  
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Time (minutes)</td>  
              <td>{{goal}}</td>
              <td>{{time}}</td>
              <td>{{goalsLeft}}</td>  
            </tr>
            </tbody>
        </table>
        <span id="note">*Intensity must be moderate or vigrous to count towards goal</span>
        </div>
        <div id="total-each" class="box table">
        <table class="table has-text-centered"> 
          <caption><h4 class="title is-4">Total for Each Type</h4></caption>
            <thead>  
            <tr>
              <th>Type</th>
              <th>Completed (minutes)</th>  
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Strength</td>  
              <td>{{type[0]}}</td>
            </tr>
            <tr>
              <td>Cardio</td>  
              <td>{{type[1]}}</td>
            </tr>
            <tr>
              <td>Flexibility</td>  
              <td>{{type[2]}}</td>
            </tr>
            <tr>
              <td>Coordination</td>  
              <td>{{type[3]}}</td>
            </tr>
            <tr>
              <td>Balance</td>  
              <td>{{type[4]}}</td>
            </tr>
            <tr>
              <td>Other</td>  
              <td>{{type[5]}}</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div style="margin-bottom:600px;"></div>
        </div> 
    </div>
</template>

<script>
import { currentDate } from "../models/Date";
import User from "../models/Users";
import { AddedExercise } from "../models/Exercise";
import { shareProgress, getPosts } from "../models/Post";
currentDate();

export default {
    name: 'ExHistory',

    data:()=>({
        User, 
        AddedExercise,
        history: [{
            date: currentDate()
        }],
        allDates: [],
        type: [0,0,0,0,0,0],
        goal: 30,
        time: 0,
        goalsLeft: 30,
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
            if(AddedExercise != null) {
                let totalType = [0,0,0,0,0,0]
                let completed = 0;
                let hist = [];
                let his = AddedExercise.map(function(x, index) {
                    if(x.date == date && x.email == User.CurrentUser.Email) {
                        hist.push(AddedExercise[index]);
                        if(AddedExercise[index].intensity == "moderate" || AddedExercise[index].intensity == "vigorous") {
                            completed += AddedExercise[index].time;
                        }
                        if(AddedExercise[index].exType == "Strength") {
                            totalType[0] += AddedExercise[index].time;
                        } 
                        else if(AddedExercise[index].exType == "Cardio") {
                            totalType[1] += AddedExercise[index].time;
                        } 
                        else if(AddedExercise[index].exType == "Flexibility") {
                            totalType[2] += AddedExercise[index].time;
                        } 
                        else if(AddedExercise[index].exType == "Coordination") {
                            totalType[3] += AddedExercise[index].time;
                        } 
                        else if(AddedExercise[index].exType == "Balance") {
                            totalType[4] += AddedExercise[index].time;
                        } 
                        else {
                            totalType[5] += AddedExercise[index].time;
                        } 
                    }
                });
                if(hist.length != 0) {
                    document.getElementById("none").innerHTML="";
                    this.findRemain(completed);
                    this.time = completed;
                    this.type = totalType;
                    this.history = hist;
                    return this.history;
                }
                else {
                    document.getElementById("none").innerHTML="No exercises logged today";
                    this.history = [{ date: currentDate() }];
                    this.findRemain(0);
                    this.type = [0,0,0,0,0,0];
                    this.time = 0;
                }
            }
            else {
                document.getElementById("none").innerHTML="No exercises logged today";
                this.history = [{ date: currentDate() }];
                this.findRemain(0);
                this.type = [0,0,0,0,0,0];
                this.time = 0;
            }
        },
        findDates() {
            let dates = [currentDate()];
            let date = AddedExercise.map(function(x, index) {
                if(dates.find(x => (x == AddedExercise[index].date))) {
                     x=true;
                }
                else {
                     dates.push(AddedExercise[index].date);
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
        findRemain(completed) {
            let remaining = this.goal - completed;
            this.goalsLeft = remaining;
            return this.goalsLeft;
        },
        async share() {
          await shareProgress(this.history);
          await getPosts();
          this.shared = true;
        }
    }
} 
</script>

<style scoped>
#daily-goal {
  max-width: 450px;
  float: left;
  margin-left: 20%;
}

#total-each {
  width:300px; 
  float:left; 
  margin-left:20px;
}

.history-drop {
  float:left;
  margin-left:17%;
}

table,th,td {
  margin: auto;
}

#note {
  font-size: 14px;  
}

#dropdown-menu4 {
  max-height:150px;
  overflow-y:scroll;
}

.dropdown-menu {
  min-width: 10rem;
}

.dropdown-content {
  border: 1px solid lightgrey;
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

@media(max-width: 1215px) {
  #daily-goal {
    float: none;
    margin: auto;
  }

  #total-each {
    float: none; 
    margin: auto;
    margin-top: 20px;
  }
  
}
    
</style>