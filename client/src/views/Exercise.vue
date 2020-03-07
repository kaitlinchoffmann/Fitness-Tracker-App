<template>
    <div class="container">
        <h1 class="title is-1">Log Those Exercises!</h1>
            <div class="section">
                <div class="columns">
            <div class="column"> 
              <div class="box">

                 <div class="notification" v-for="(x, i) in exercises">
                  <button class="delete" @click="remove(i)" ></button>
                  Exercise: {{x.text}} 
                </div>
                <input class="input" type="text" placeholder="Text input" v-model="exType">
                <button class="button is-primary is-light" @click="add()" >Add</button>
              </div> 
              <button class="input" @click="submit()">Submit</button> 
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
          exercises: [
            { text: 'Squats' }
          ]
        }),
        methods: {
          remove(i){
            this.exercises.splice(i, 1);
          },
          add(){
                this.exercises.push({ 
                text: this.exType /*
                text: this.exercise,
                text: this.sets,
                text: this.reps,
                text: this.weight,
                text: this.time */
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