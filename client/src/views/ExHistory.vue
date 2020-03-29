<template>
    <div class="container">
        <div class="container" style="float:left;margin-left:15%;">
            <div class="dropdown is-hoverable" style="width:300px;">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
      <span>Pick a Past Log:</span><br>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div class="dropdown-content has-text-centered">
      <div class="dropdown-item" v-for="x in allDates" :key="x.dates" id:x.dates>
        <button class="button" @click="findRecent(x)">{{x}}</button>
      </div>
    </div>
  </div>
</div>
        </div>
        <h1 class="title is-1 has-text-left">Exercise History</h1>
         <nav class="has-text-centered">
            <router-link to="/exercise">Add an Exercise</router-link>
         </nav>
        <div class="section">
       <div class="box" style="width: 800px; margin:auto;">
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
                  </tbody>
        </table> 
        </div><br/>
        <div class="box" style="width:450px;float:left;margin-left:20%;">
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
        <div class="box" style="width:300px; float:left; margin-left:20px">
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
import { CurrentUser, AddedExercise, currentDate } from "../models/Profile";
currentDate();

export default {
    name: 'ExHistory',

    data:()=>({
        CurrentUser, 
        AddedExercise,
        history: [{
            date: currentDate()
        }],
        allDates: [],
        type: [0,0,0,0,0,0],
        goal: 30,
        time: 0,
        goalsLeft: 30
    }),
    components: {
      
    },
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
            if(AddedExercise != null) {
                let totalType = [0,0,0,0,0,0]
                let completed = 0;
                let hist = [];
                let his = AddedExercise.map(function(x, index) {
                    if(x.date == date) {
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
                }
            }
            else {
                document.getElementById("none").innerHTML="No exercises logged today";
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
            this.allDates = dates;
            return this.allDates;
        },
        findRemain(completed) {
            let remaining = this.goal - completed;
            this.goalsLeft = remaining;
            return this.goalsLeft;
        }
    }
} 
</script>

<style scoped>

table,th,td {
  margin: auto;
}

#note {
  font-size: 14px;  
}
    
</style>