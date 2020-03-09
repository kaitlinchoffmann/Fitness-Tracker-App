<template>
    <div class="container">
        <h1 class="title is-1">Ate Something? Track it!</h1>
          <nav class="has-text-centered">
            <router-link to="/foodhistory">Food History</router-link>
          </nav>
            <div class="section">
                <div class="columns">
            <div class="column"> 
              <div class="box">
                <table class="table">
                  <thead id="error">Breakfast</thead>
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
                      <th>Date</th>
                    </tr>
                    <tr> 
                      <td>Apple</td>
                      <td>Fruit</td> 
                      <td>95</td>
                      <td>0.5</td>
                      <td>25</td>
                      <td>0.3</td>
                      <td>2</td>
                      <td>19</td>
                      <td>2020-03-08</td>
                    </tr>
                    <tr class="" v-for="(x, i) in foodList" :key="(x.group)">   
                      <td>{{x.food}}</td>
                      <td>{{x.group}}</td> 
                      <td>{{x.calories}}</td>
                      <td>{{x.protein}}</td>
                      <td>{{x.carbs}}</td>
                      <td>{{x.fat}}</td>
                      <td>{{x.sodium}}</td>
                      <td>{{x.sugar}}</td>
                      <td>{{x.date}}</td>
                      <button class="delete" @click="remove(i)" ></button>
                    </tr>
                    <tr>
                      <td><input class="input" type="text" placeholder="food" v-model="food" required></td>
                      <td>
                        <select class="input" v-model="group" id="group">
                          <option value="" disabled selected>Select Group</option>
                          <option value="Fruit">Fruit</option>
                          <option value="Vegetable">Vegetable</option>
                          <option value="Grain">Grain</option>
                          <option value="Protein">Protein</option>
                          <option value="Dairy">Dairy</option>
                          <option value="Water">Water</option>
                          <option value="Snack">Snack</option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td><input class="input" type="number" min="0" max="5000" placeholder="calories" v-model="calories"></td>
                      <td><input class="input" type="number" min="0" max="5000" placeholder="protein" v-model="protein"></td>
                      <td><input class="input" type="number" min="0" max="5000" placeholder="carbs" v-model="carbs"></td>
                      <td><input class="input" type="number" min="0" max="5000" placeholder="fat" v-model="fat"></td>
                      <td><input class="input" type="number" min="0" max="5000" placeholder="sodium" v-model="sodium"></td>
                      <td><input class="input" type="number" min="0" max="5000" placeholder="sugar" v-model="sugar"></td>
                      <td><input class="input" type="date" placeholder="date" v-model="date" required></td>
                    </tr>
                </tbody>
                  <button class="button is-primary is-light" @click="add()">Add</button>
                </table>

            
              </div> 
              <button class="button is-warning" @click="addFood">Submit</button>
            </div>
          </div>
        <div style="margin-bottom:220px;"></div>
      </div>
    </div>
</template>

<script>
import { AddFood, RemoveExercise, CurrentUser, ExerciseType, currentDate } from "../models/Profile";

export default {
    name: 'Exercise',

    data:()=>({
          food: "",
          group: "",
          calories: "",
          protein: "",
          carbs: "",
          fat: "",
          sodium: "",
          sugar: "",
          date: currentDate(),
          foodList: []
        }),
        methods: {
          remove(i){
            this.foodList.splice(i, 1);
          },
          add(){
            if(this.calories == "") {
              this.calories = "n/a";
            }
            if(this.protein == "") {
              this.protein = "n/a";
            }
            if(this.carbs == "") {
              this.carbs = "n/a";
            }
            if(this.fat == "") {
              this.fat = "n/a";
            }
            if(this.sodium == "") {
              this.sodium = "n/a";
            }
            if(this.sugar == "") {
              this.sugar = "n/a";
            }
            if(this.food == "") {
              document.getElementById("error").innerHTML="Please input a Food";
            }
            else if(this.group == "") {
              document.getElementById("error").innerHTML="Please input a Group";
            }
            else if(this.date == "") {
              document.getElementById("error").innerHTML="Please input a Date";
            }
            else {
                this.foodList.push({ 
                food: this.food,
                group: this.group,
                calories: this.calories,
                protein: this.protein,
                carbs: this.carbs,
                fat: this.fat,
                sodium: this.sodium,
                sugar: this.sugar,
                date: this.date
          });
             document.getElementById("error").innerHTML="Nice job! Keep it up!";
              this.food="";
              this.group= "";
              this.calories="";
              this.protein="";
              this.carbs="";
              this.fat="";
              this.sodium="";
              this.sugar="";
            }
          },
          addFood() {
            AddFood(this.foodList);
            this.$router.push('/foodhistory');
          }
        }
}

</script>