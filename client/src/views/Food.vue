<template>
    <div class="container">
        <h1 class="title is-1">Ate Something? Track it!</h1>
          <nav class="has-text-centered">
            <router-link to="/foodhistory">Food History</router-link>
          </nav>
            <div class="section">
                <div class="columns">
            <div class="column"> 
              <div class="box table">
                <p id="error"></p>
                <p id="note"></p>
                <table class="table">
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
                      <th>Date</th>
                    </tr>
                   </thead>
                    <tbody>
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
                    <h4>Or Look Up a Food Item:</h4><br/>
                    <input class="input" placeholder="enter food item" type="text" v-model="search"><br/><br/>
                    <button class="button is-primary is-small" @click="searchFood(search)">Search</button>    
                    <div v-if="foodResults!=''">
                    <hr>  
                    <form id="foodForm" @submit.prevent="add">
                       <h5 class="title is-5">Pick a Food:</h5> 
                        <select class="input" name="id">
                           <option :value="item.food.foodId" name="id" v-for="item in foodResults" :key="item.data" :id=item.data>{{item.food.label}} - {{item.food.category}}</option>
                        </select><br/><br/>
                        <input class="button is-light is-small" type="submit" value="select" @click="addItem">
                    <br/>
                    </form>
                    </div>
                    <form id="foodAmount" @submit.prevent="add"><br/>
                      <div v-if="foodMeasures != ''">
                        Measurement: 
                       <select class="input" name="amount">
                          <option :value="measure.uri" name="label" v-for="measure in foodMeasures.measures" :key="measure.label" :id=measure.label>{{measure.label}} </option>
                       </select><br/><br/>
                       Quantity: <input  class="input" type="number" min="0" placeholder="input quantity" v-model="quantity">
                     <br/><br/>
                     <input type="submit" value="Add" style="width:400px;" class="button is-light" @click="addSearchFood()">
                     <br/><br/>
                     </div>
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
import { currentDate } from "../models/Date";
import User from "../models/Users";
import { addFood, AddedFood, getFood } from "../models/Food";
import { apiKeyFood, apiIDFood, apiKeyNutr, apiIDNutr } from "../models/noneya";

export default {
    name: 'Food',

    data:()=>({
          User,
          apiKeyFood,
          apiIDFood,
          apiKeyNutr,
          apiIDNutr,
          search: "",
          foodId: "",
          measureURI: "",
          quantity: "",
          foodResults: "",
          foodMeasures: "",
          results: "",
          food: "",
          group: "",
          calories: "",
          protein: "",
          carbs: "",
          fat: "",
          sodium: "",
          sugar: "",
          date: currentDate(),
          foodList: [],
          AddedFood
        }),
        methods: {
          remove(i){
            this.foodList.splice(i, 1);
          },
          add(){
            if(this.calories == "") this.calories = 0;
            if(this.protein == "") this.protein = 0;
            if(this.carbs == "") this.carbs = 0;
            if(this.fat == "") this.fat = 0;
            if(this.sodium == "") this.sodium = 0;
            if(this.sugar == "") this.sugar = 0;
            if(this.food == "") document.getElementById("error").innerHTML="Please input a Food";
            else if(this.date == "") document.getElementById("error").innerHTML="Please input a Date";
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
                email: User.CurrentUser.Email,
                userID: User.CurrentUser._id,
                date: this.date,
                shared:false
          });
             document.getElementById("error").innerHTML="Nice job! Keep it up!";
             document.getElementById("note").innerHTML="";
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
          async addFood() {
            try {
            await addFood(this.foodList);
            this.AddedFood = await getFood(User.CurrentUser.Email);
            this.$router.push('/foodhistory');
            } catch (error) {
              console.log(error);
            }
          },
          searchFood(search) {
              var urlFood = "https://api.edamam.com/api/food-database/parser?ingr=" + search + "&app_id=" + this.apiIDFood + "&app_key=" + this.apiKeyFood;
              this.$axios
                .get(urlFood)
                .then(response => (this.foodResults = response.data.hints))                 
          },
          addItem() {         
            this.foodId = "";
            this.foodMeasures = "";
            const selectedFood = this.foodResults.find(x => x.food.foodId == document.getElementById("foodForm").elements[0].value);
            if(!selectedFood) throw Error('Food not found');
            this.foodMeasures = selectedFood;
            this.foodId = document.getElementById("foodForm").elements[0].value;
          },
          addSearchFood() {
              
              this.measureURI = document.getElementById("foodAmount").elements[0].value;
              this.quantity = document.getElementById("foodAmount").elements[1].value;
              var newResults = "";

              var urlFood = "https://api.edamam.com/api/food-database/nutrients?app_id="+ this.apiIDNutr + "&app_key=" + this.apiKeyNutr;
              this.$axios.post(urlFood, {
                "ingredients": [
                  {
                    "quantity": Number(this.quantity),
                    "measureURI": this.measureURI,
                    "foodId": this.foodId
                  }
                  ]  
              })
              .then(response => 
              {
                this.results = response.data;
                console.log(this.results);
                this.food = this.foodMeasures.food.label;
                try {
                  this.calories = this.results.calories;
                }
                catch {
                  this.calories = 0;
                }
                try {
                    this.fat = (this.results.totalNutrients.FAT.quantity).toFixed(0);
                }
                catch {
                  this.fat = "";
                }
                try {
                  this.carbs = (this.results.totalNutrients.CHOCDF.quantity).toFixed(0);
                }
                catch {
                  this.carbs = "";
                }
                try {
                  this.protein = (this.results.totalNutrients.PROCNT.quantity).toFixed(0);
                }
                catch {
                  this.protein = "";
                }
                try {
                  this.sodium = (this.results.totalNutrients.NA.quantity).toFixed(0);
                }
                catch {
                  this.sodium = "";
                }
                try {
                  this.sugar = (this.results.totalNutrients.SUGAR.quantity).toFixed(0);
                }
                catch {
                  this.sugar = "";
                }
                this.foodResults = "";
                this.foodMeasures = "";
                document.getElementById("error").innerHTML="Look good? Add it!";
                document.getElementById("note").innerHTML="Note: Not all nutrition info available for every food which may result in empty input.";
              }) 
              .catch(error => console.log(error)) 
          }
        }
};

</script>

<style>
#food-image {
  width: 100px;
}
form {
  max-width: 400px;
}
</style>