<template>
    <div class="container">
        <h1 class="title is-1">Log Those Exercises!</h1>
          <nav class="has-text-centered">
            <router-link to="exhistory">Exercise History</router-link>
          </nav>
            <div class="section">
                <div class="columns">
            <div class="column"> 
              <div class="box table">
                <table class="table">
                  <thead id="error"></thead>
                  <tbody>
                    <tr>
                      <th>Exercise</th>
                      <th>Type</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>Weight</th>
                      <th>Time(mins)</th>
                      <th>Intensity</th>
                      <th>Date</th>
                    </tr>
                    <tr class="" v-for="(x, i) in exercises" :key="(x.exType)">   
                      <td>{{x.exName}}</td>
                      <td>{{x.exType}}</td> 
                      <td>{{x.sets}}</td>
                      <td>{{x.reps}}</td>
                      <td>{{x.weight}}</td>
                      <td>{{x.time}}</td>
                      <td>{{x.intensity}}</td>
                      <td>{{x.date}}</td>
                      <button class="delete" @click="remove(i)" ></button>
                    </tr>
                    <tr>
                      <td><input class="input" type="text" placeholder="exercise name" v-model="exName" required></td>
                      <td>
                        <select class="input" v-model="exType" id="exType">
                          <option value="" disabled selected>Select Type</option>
                          <option value="Cardio">Cardio</option>
                          <option value="Strength">Strength</option>
                          <option value="Flexibility">Flexibility</option>
                          <option value="Balance">Balance</option>
                          <option value="Coordination">Coordination</option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td><input class="input" type="number" min="0" max="2000" placeholder="sets" v-model="sets"></td>
                      <td><input class="input" type="number" min="0" max="2000" placeholder="reps" v-model="reps"></td>
                      <td><input class="input" type="number" min="0" max="2000" placeholder="weight" v-model="weight"></td>
                      <td><input class="input" type="number" min="0" max="2000" placeholder="time in minutes" v-model="time"></td>
                     <td>
                        <select class="input" v-model="intensity" id="intensity">
                          <option value="" disabled selected>Select Intensity</option>
                          <option value="rest">Rest</option>
                          <option value="low">Low</option>
                          <option value="moderate">Moderate</option>
                          <option value="vigorous">Vigorous</option>
                        </select>
                      </td>
                      <td><input class="input" type="date" placeholder="date" v-model="date" required></td>
                    </tr>
                </tbody>
                  <button class="button is-primary is-light" @click="add()" >Add</button>
                </table>

            
              </div> 
              <button class="button is-warning" @click="addExercise">Submit</button>
            </div>
          </div>
        <div style="margin-bottom:220px;"></div>
      </div>
    </div>
</template>

<script>
import { currentDate } from "../models/Date";
import { addExercise, getExercise, AddedExercise } from "../models/Exercise"
import User from "../models/Users";

export default {
    name: 'Exercise',

    data:()=>({
          exType: "",
          exName: "",
          reps: "",
          sets: "",
          weight: "",
          time: "",
          intensity: "",
          date: currentDate(),
          exercises: [],
          AddedExercise
        }),
        methods: {
          remove(i){
            this.exercises.splice(i, 1);
          },
          add(){
            if(this.sets == "") {
              this.sets = 0;
            }
            if(this.reps == "") {
              this.reps = 0;
            }
            if(this.weight == "") {
              this.weight = 0;
            }
            if(this.time == "") {
              this.time = 0;
            }
            if(this.exName == "") {
              document.getElementById("error").innerHTML="Please input an Exercise";
            }
            else if(this.exType == "") {
              document.getElementById("error").innerHTML="Please input a Exercise Type";
            }
            else if(this.intensity == "") {
              document.getElementById("error").innerHTML="Please input an Exercise Intensity";
            }
            else if(this.date == "") {
              document.getElementById("error").innerHTML="Please input a Date";
            }
            else {
                this.exercises.push({ 
                exType: this.exType,
                exName: this.exName,
                reps: this.reps,
                sets: this.sets,
                weight: this.weight,
                time: Number(this.time),
                intensity: this.intensity,
                email: User.CurrentUser.Email,
                userID: User.CurrentUser._id,
                date: this.date,
                shared: false
          });
             document.getElementById("error").innerHTML="Nice job! Keep it up!";
              this.exType="";
              this.exName= "";
              this.reps="";
              this.sets="";
              this.weight="";
              this.time="";
              this.intensity="";
            }
          },
          async addExercise() {
            try {
              await addExercise(this.exercises);
              this.AddedExercise = await getExercise(User.CurrentUser.Email);
              this.$router.push('/exhistory');
            }
            catch (error) {
              console.log(error);
            }
          }
        }
}

</script>