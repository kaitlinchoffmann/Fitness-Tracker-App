<template>
    <div class="container">
        <h1 class="title is-1">Log Those Exercises!</h1>
            <div class="section">
                <div class="columns">
            <div class="column"> 
              <div class="box">
                <table class="table">
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
                    <tr> <!-- Test, get rid of after!-->
                      <td>Squats</td>
                      <td>Strength</td> 
                      <td>4</td>
                      <td>15</td>
                      <td>0</td>
                      <td>15</td>
                      <td>moderate</td>
                    </tr>
                    <tr class="" v-for="(x, i) in exercises" :key="(x.exType)">   
                      <td>{{x.exName}}</td>
                      <td>{{x.exType}}</td> 
                      <td>{{x.sets}}</td>
                      <td>{{x.reps}}</td>
                      <td>{{x.weight}}</td>
                      <td>{{x.time}}</td>
                      <td>{{x.intensity}}</td>
                      <button class="delete" @click="remove(i)" ></button>
                    </tr>
                    <tr>
                      <td><input class="input" type="text" placeholder="exercise name" v-model="exName"></td>
                      <td><input class="input" type="text" placeholder="exercise type" v-model="exType"></td>
                      <td><input class="input" type="text" placeholder="sets" v-model="sets"></td>
                      <td><input class="input" type="text" placeholder="reps" v-model="reps"></td>
                      <td><input class="input" type="text" placeholder="weight" v-model="weight"></td>
                      <td><input class="input" type="text" placeholder="time in minutes" v-model="time"></td>
                      <td><input class="input" type="text" placeholder="intensity" v-model="intensity"></td>
                    </tr>
                </tbody>
                  <button class="button is-primary is-light" @click="add()" >Add</button>
                </table>

            
              </div> 
              <button class="button is-warning" @click="submit()">Submit</button> 
            </div>
          </div>

            </div>

    </div>
</template>

<script>
import { addExercise, removeExercise, CurrentUser } from "../models/Profile";

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
          exercises: []
        }),
        methods: {
          remove(i){
            this.exercises.splice(i, 1);
          },
          add(){
                this.exercises.push({ 
                exType: this.exType,
                exName: this.exName,
                reps: this.reps,
                sets: this.sets,
                weight: this.weight,
                time: this.time,
                intensity: this.intensity
          });
          },
          submit(){
              addExercise(this.exercises)
              //this.$router.push('/history');
          }
        }
  /*data(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    remove() {
        removeExercise()
      
    }
  }
  */
}

</script>