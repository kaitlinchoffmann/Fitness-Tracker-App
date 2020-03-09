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
        <h1 class="title is-1 has-text-left">Exercise History</h1><br/>
        <div class="section">
       <div class="box" style="width: 800px; margin:auto;">
        <p class="title is-4">
                <h3 id="none" class="title is-3"></h3>
        </p>
        <table class="table" style="margin:auto;">
               <thead style="font-weight:bold;font-size:20px;">{{history[0].date}}</thead>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Type</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                      <th>Time(mins)</th>
                      <th>Intensity</th>
                    </tr>
                  </tbody> 
                  <tr class="" v-for="(x) in history" :key="(x.date)">  
                      <td>{{x.exName}}</td>
                      <td>{{x.exType}}</td> 
                      <td>{{x.sets}}</td>
                      <td>{{x.reps}}</td>
                      <td>{{x.weight}}</td>
                      <td>{{x.time}}</td>
                      <td>{{x.intensity}}</td>
                  </tr>
        </table> 
        </div>
        <div style="margin-bottom:200px;"></div>
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
        allDates: []
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
                let hist = [];
                let his = AddedExercise.map(function(x, index) {
                    if(x.date == date) {
                        hist.push(AddedExercise[index]);
                    }
                });
                if(hist.length != 0) {
                    document.getElementById("none").innerHTML="Logged Exercises for: ";
                    this.history = hist;
                    return this.history;
                }
                else {
                    document.getElementById("none").innerHTML="No exercises logged today: ";
                }
            }
            else {
                document.getElementById("none").innerHTML="No exercises logged today: ";
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
        }
    }
} 
</script>

<style scoped>
    
</style>