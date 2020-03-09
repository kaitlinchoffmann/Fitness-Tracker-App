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
        <h1 class="title is-1 has-text-left">Food History</h1><br/>
        <div class="section">
       <div class="box" style="width: 900px; margin:auto;">
        <p class="title is-4">
                <h3 id="none" class="title is-3"></h3>
        </p>
        <table class="table" style="margin:auto;">
               <thead style="font-weight:bold;font-size:20px;">{{history[0].date}}</thead>
                  <tbody>
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
                  </tbody> 
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
        </table> 
        </div>
        <div style="margin-bottom:200px;"></div>
        </div> 
    </div>
</template>

<script>
import { CurrentUser, AddedFood, currentDate } from "../models/Profile";
currentDate();

export default {
    name: 'FoodHistory',

    data:()=>({
        CurrentUser, 
        AddedFood,
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
            if(AddedFood != null) {
                let hist = [];
                let his = AddedFood.map(function(x, index) {
                    if(x.date == date) {
                        hist.push(AddedFood[index]);
                    }
                });
                if(hist.length != 0) {
                    document.getElementById("none").innerHTML="Logged Food for: ";
                    this.history = hist;
                    return this.history;
                }
                else {
                    document.getElementById("none").innerHTML="No Food logged today: ";
                }
            }
            else {
                document.getElementById("none").innerHTML="No Food logged today: ";
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
            this.allDates = dates;
            return this.allDates;
        }
    }
} 
</script>

<style scoped>
    
</style>