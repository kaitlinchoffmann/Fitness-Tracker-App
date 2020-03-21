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
                  </tbody>
        </table>
        </div><br/>
        <div class="box" style="width:500px;margin:auto;">
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
              <td>{{CurrentDRI.Protein}}</td>
              <td>{{nutrition[1]}}</td>
              <td>{{goalsLeft[1]}}</td>  
            </tr>
            <tr>
              <td>Carbs(g)</td>  
              <td>{{CurrentDRI.LowCarb}} - {{CurrentDRI.HighCarb}}</td>
              <td>{{nutrition[3]}}</td>
              <td>{{goalsLeft[3]}}</td>  
            </tr>
            <tr>
              <td>Fat(g)</td>  
              <td>{{CurrentDRI.LowFat}} - {{CurrentDRI.HighFat}}</td>
              <td>{{nutrition[2]}}</td>
              <td>{{goalsLeft[2]}}</td>  
            </tr>
            <tr>
              <td>Sodium(mg)</td>  
              <td>{{CurrentDRI.Sodium}}</td>
              <td>{{nutrition[4]}}</td>
              <td>{{goalsLeft[4]}}</td>  
            </tr>
            <tr>
              <td>Sugar(g)</td>  
              <td>{{CurrentDRI.Sugar}}</td>
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
import { CurrentUser, AddedFood, currentDate, findEER, DRI, CurrentDRI } from "../models/Profile";
currentDate();

export default {
    name: 'FoodHistory',

    data:()=>({
        CurrentDRI,
        CurrentUser,
        DRI, 
        AddedFood,
        history: [{
            date: currentDate()
        }],
        allDates: [],
        nutrition: [0,0,0,0,0,0],
        calories: CurrentUser.EER.toFixed(0),
        goalsLeft: [ CurrentUser.EER.toFixed(0), CurrentDRI.Protein, CurrentDRI.HighFat, CurrentDRI.HighCarb, CurrentDRI.Sodium, CurrentDRI.Sugar]
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
                let nutri = [0,0,0,0,0,0];
                let hist = [];
                let his = AddedFood.map(function(x, index) {
                    if(x.date == date) {
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
                }
            }
            else {
                document.getElementById("none").innerHTML="No food logged today ";
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
        },
        findRemain(cal, p, f, car, so, su) {
            let cals = this.calories - cal;
            let pro = this.CurrentDRI.Protein - p;
            let fat = this.CurrentDRI.HighFat - f;
            let carb = this.CurrentDRI.HighCarb - car;
            let sod = this.CurrentDRI.Sodium - so;
            let sug = this.CurrentDRI.Sugar - su;

            this.goalsLeft[0] = cals;
            this.goalsLeft[1] = pro;
            this.goalsLeft[2] = fat;
            this.goalsLeft[3] = carb;
            this.goalsLeft[4] = sod;
            this.goalsLeft[5] = sug;
              
            return this.goalsLeft;
        }
    }
} 
</script>

<style scoped>

table,th,td {
  margin: auto;
}
    
</style>