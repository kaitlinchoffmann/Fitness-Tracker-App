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
                  <thead id="error"></thead>
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
                <div class="box" style="max-width:500px;">
                    <h4>Or Look Up a Food Item</h4>
                    <input class="input" type="text" v-model="search">
                    <button class="button is-primary is-small" @click="searchFood(search)">Search</button>
                    <form id="foodForm" @submit.prevent="add">
                    <div v-for="item in foodResults" :key="item.data" :id=item.data>
                       <hr>
                       <h5 class="title is-5">{{item.food.label}}:</h5> 
                       <input type="hidden" :value="item.food.foodId" name="foodId">{{item.food.foodId}}
                       <img id="food-image" :src="item.food.image"><br/>
                       Food Category: {{item.food.category}}<br/>
                       Measurement: 
                       <select name="label">
                          <option :value="measure.uri" name="label" v-for="measure in item.measures" :key="measure.label" :id=item.label>{{measure.label}} </option>
                       </select><br/>
                       Quantity: <input  type="number" min="0" placeholder="input quantity" v-model="quantity"><input type="submit" value="Add" style="float:right;" class="button is-small is-light" @click="addSearchFood()">
                   <br/></div>
                   </form>
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
    name: 'Food',

    data:()=>({
          apiKeyFood: "3749d9c020ee4f0a200708c580d345ce",
          apiIDFood: "27a679ca",
          apiKeyNutr: "b90b69a6ac4847d41ed7cb21fe65f3f8",
          apiIDNutr: "b3490425",
          search: "",
          foodId: "",
          measureURI: "",
          quantity: "",
          foodResults: "",
         /* urlFood: "https://api.edamam.com/api/food-database/parser?ingr=" + this.search + "&app_id=" + this.apiIDFood + "&app_key=" + this.apiKeyFood,
          urlNutr: "https://api.edamam.com/api/food-database/nutrients?app_id="+ this.apiIDNutr + "&app_key=" + this.apiKeyNutr,
          */food: "",
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
              this.calories = 0;
            }
            if(this.protein == "") {
              this.protein = 0;
            }
            if(this.carbs == "") {
              this.carbs = 0;
            }
            if(this.fat == "") {
              this.fat = 0;
            }
            if(this.sodium == "") {
              this.sodium = 0;
            }
            if(this.sugar == "") {
              this.sugar = 0;
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
                calories: Number(this.calories),
                protein: Number(this.protein),
                carbs: Number(this.carbs),
                fat: Number(this.fat),
                sodium: Number(this.sodium),
                sugar: Number(this.sugar),
                email: CurrentUser.Email,
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
          },
          searchFood(search) {
              var urlFood = "https://api.edamam.com/api/food-database/parser?ingr=" + search + "&app_id=" + this.apiIDFood + "&app_key=" + this.apiKeyFood;
              this.$axios
                .get(urlFood)
                .then(response => (this.foodResults = response.data.hints))                
          },
          addSearchFood() {
              this.foodId = document.getElementById("foodForm").elements[0].value;
              this.measureURI = document.getElementById("foodForm").elements[1].value;
              this.quantity = document.getElementById("foodForm").elements[2].value;
              
              console.log(document.getElementById("foodForm").elements[0].value);
              console.log(document.getElementById("foodForm").elements[1].value);
              console.log(document.getElementById("foodForm").elements[2].value);
              console.log(document.getElementById("foodForm").elements[2].elements[2].value);

          }
        }
};

</script>

<style>
#food-image {
  width: 100px;
}
</style>