<template>
<div class="profile">
  <div class = "section" v-for="user in User" :key="user.Name">
    <h1 class="title is-1">
      {{user.Name}}       
    </h1>  
    <div>
      <div style="float:left; margin-left:30px;">
        <img :src="user.Picture" class="card-image" id="profile-pic"/>
        <div id="status">{{user.Status}}<button class="button is-small btn-status">Edit</button></div>
        
        <h3 class=title is-3>Test</h3>
          <div v-for="exx in AddedExercise" :key="exx.exType">
            {{exx.exType}}<br/>
            {{exx.exName}}<br/>
          </div>  


        <h3 class="title is-3">Recent Exercise</h3>
          <div class = "recent-ex" v-for="ex in ExerciseLog" :key="ex.Exercise">
            Exercise: {{ex.Exercise}}<br/>
            Type: {{ex.Type}}<br/>
            Reps: {{ex.Reps}}<br/>
            Sets: {{ex.Sets}}<br/>
            Weight(s): {{ex.Weight}}<br/>
            Time(minutes): {{ex.TimeMinutes}}<br/>
            Intensity: {{ex.Intensity}}

          </div>  
        <h3 class="title is-3">Friends</h3>
        <div class="section friends" v-for="friend in Friends" :key="friend.Name">
          <img :src="friend.Picture" class="tiny-image"> <br/>{{friend.Name}} - {{friend.Status}}
        </div>
      </div>  
        <li class="card" id= "post" v-for="posts in Posts" :key="posts.Post">
          <div class="inner-post">{{posts.Post}}</div>
          <button class="button is-small btn-post">Like</button>
          <button class="button is-small btn-post">Comment</button>
        </li>
    </div>  
  </div> 
</div>
</template>

<script>
import { User, Friends, ExerciseLog, Posts, AddedExercise } from "../models/Profile";

export default {
    name: 'Profile',

    data:()=>({
        User,
        Friends,
        Posts,
        ExerciseLog, 
        AddedExercise
    }),
    components: {
      
    }
} 
</script>

<style>
#post {
    width: 700px;
    margin-bottom: 40px;
    margin-left: 80px;
    list-style-type: none;
    padding: 30px;
}

#status {
  box-shadow: 0px 1px 5px lightgrey;
  padding: 10px;
  margin-top: 10px;
}

.btn-post {
  margin-top: 20px;
  margin-right: 10px;
}

.button {
  color: white;
  background-color: slateblue; 
}

.button:hover {
  color: white;
}

.btn-status {
  float:right;
}

.inner-post {
  
  padding: 20px;
  box-shadow: 0px 1px 5px lightgrey;
  background-color: whitesmoke;
}

.tiny-image {
  display: block;
  width: 300px; 
}

.friends {
  margin-top: 20px;
  margin-bottom: 40px;
  border-left: 1px solid lightgrey;
  padding: 10px;
}

.recent-ex {
  box-shadow: 0px 1px 5px lightgrey;
  padding: 30px;
}

</style>