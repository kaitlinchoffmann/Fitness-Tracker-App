<template>
    <div class="container">
        <h1 class="title is-1">Exercise History</h1>
        <h3 class=title is-3>Test</h3>
          <div v-for="exx in AddedExercise" :key="exx.exType">
            {{exx.exType}}<br/>
            {{exx.exName}}<br/>
          </div>  

    </div>
</template>

<script>
import { CurrentUser, AddedExercise } from "../models/Profile";

export default {
    name: 'ExHistory',

    data:()=>({
        CurrentUser, 
        AddedExercise
    }),
    components: {
      
    }
} 
</script>