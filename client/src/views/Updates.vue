<template>
<div class="container">
    <div class="section">
      <h3 class="title is-3 update-title">Shared Progress</h3>  
        <h2 class="title is-2 has-text-center">
          {{User.CurrentUser.Name}}     
        </h2>
        <div >
          <img :src="User.CurrentUser.Picture" class="card-image" id="update-pic"/>
        </div><br/>
        <div id="ex-section">
          <h4 class="title is-4 ex-title">Shared Exercises</h4><br/>
          <div v-if="updatedPosts.length > 0">
            <div class="box table posts" v-for="(x,ind) in updatedPosts" :key="x.date" id:x.date>
              <table id="reg-table" class="table exercise-post">
                <caption class="title is-5">Date: {{x.date}}</caption>
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Type</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Time</th>
                    <th>Intensity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="x in updatedPosts[ind].data" :key="x.exName" id:x.exName>
                    <td>{{x.exName}}</td>
                    <td>{{x.exType}}</td>
                    <td>{{x.sets}}</td>
                    <td>{{x.reps}}</td>
                    <td>{{x.weight}}</td>
                    <td>{{x.time}}</td>
                    <td>{{x.intensity}}</td>
                  </tr>  
                </tbody>
              </table><br/>

              <table id="mobile-table" class="table">
                <caption class="title is-5">Date: {{x.date}}</caption>
                <hr>
                <tbody v-for="x in updatedPosts[ind].data" :key="x.exName" id:x.exName>
                  <tr>
                    <th style="color:slateblue;">Exercise:</th>
                    <td>{{x.exName}}</td>
                  </tr>
                  <tr>  
                    <th>Type:</th>
                    <td>{{x.exType}}</td>
                  </tr>
                  <tr>  
                    <th>Sets:</th>
                    <td>{{x.sets}}</td>
                  </tr>
                  <tr>  
                    <th>Reps:</th>
                    <td>{{x.reps}}</td>
                  </tr>
                  <tr>  
                    <th>Weight:</th>
                    <td>{{x.weight}}</td>
                  </tr>
                  <tr>  
                    <th>Time:</th>
                    <td>{{x.time}}</td>
                  </tr>
                  <tr>  
                    <th>Intensity:</th>
                    <td>{{x.intensity}}</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          <div class="box" v-else>
            You haven't shared any exercises yet!
          </div>
        </div>

        <div id="food-section">
          <h4 class="title is-4">Shared Food</h4><br/>
          <div v-if="updatedFood.length > 0">
            <div class="box table posts" v-for="(x,ind) in updatedFood" :key="x.date" id:x.date>
              <table id="reg-food-table" class="table food-post">
                <caption class="title is-5">Date: {{x.date}}</caption>
                <thead>
                  <tr>
                    <th>Food</th>
                    <!-- <th>Group</th> -->
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                    <th>Sugar</th>
                    <th>Sodium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="x in updatedFood[ind].data" :key="x.food" id:x.food>
                    <td>{{x.food}}</td>
                    <!-- <td>{{x.group}}</td> -->
                    <td>{{x.calories}}</td>
                    <td>{{x.protein}}</td>
                    <td>{{x.carbs}}</td>
                    <td>{{x.fat}}</td>
                    <td>{{x.sugar}}</td>
                    <td>{{x.sodium}}</td>
                  </tr>  
                </tbody>
                
              </table><br/>

              <table id="mobile-food-table" class="table">
                <caption class="title is-5">Date: {{x.date}}</caption>
                <hr>
                <tbody id="mobile-food-content" v-for="x in updatedFood[ind].data" :key="x.food" id:x.food>
                  <tr>
                    <th style="color:slateblue;">Food:</th>
                    <td>{{x.food}}</td>
                  </tr>
                  <tr>  
                    <th>Group:</th>
                    <td>{{x.group}}</td>
                  </tr>
                  <tr>
                    <th>Calories:</th>
                    <td>{{x.calories}}</td>
                  </tr>
                  <tr>  
                    <th>Protein:</th>
                    <td>{{x.protein}}</td>
                  </tr>
                  <tr>
                    <th>Carbs:</th>
                    <td>{{x.carbs}}</td>
                  </tr>
                  <tr>  
                    <th>Fat:</th>
                    <td>{{x.fat}}</td>
                  </tr>
                  <tr>  
                    <th>Sugar:</th>
                    <td>{{x.sugar}}</td>
                  </tr>
                  <tr>  
                    <th>Sodium:</th>
                    <td>{{x.sodium}}</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          <div class="box" v-else>
            You haven't shared any food yet!
          </div>
        </div><br/><br/>

        <div style="margin-bottom:550px;"></div>
    </div>
</div>
    
</template>

<script>
import User from "../models/Users";
import { getPosts, getFoodPosts, posts, updatedPosts, updatedFood } from "../models/Post";
import { allFriends } from "../models/Friends";

export default {
  name: 'Updates',

    data:()=>({
        User,
        updatedPosts,
        updatedFood,
        allFriends
    }),
    mounted:function() {
        this.getAllPosts();
    },
    methods: {
        async getAllPosts() {
          //get exercise posts
            this.updatedPosts = await getPosts();
            let datesDesc = this.sortDates;
            this.updatedPosts = this.updatedPosts.sort(datesDesc);
          //get food posts
            this.updatedFood = await getFoodPosts();
            let datesDesc2 = this.sortDates;
            this.updatedFood = this.updatedFood.sort(datesDesc2);
        },
        sortDates(d1, d2){
          let date1 = d1.date;
          let date2 = d2.date;
          if(date1 > date2) return -1;
          if(date1 < date2) return 1;
          return 0;
        }
    }
}
</script>

<style>
/* #update-pic {
  margin-left:3%;
} */
img#update-pic.card-image {
    margin: auto;
}

#food-section {
  float:right;
}

#ex-section {
  float: left;
}

#mobile-table {
  display:none;
}

#mobile-food-table {
  display:none;
}

.box.table.posts {
    max-width: 630px;
}

table.exercise-post.table {  
 border-radius: 10px;
 margin:auto;
}
table.food-post.table { 
 border-radius: 10px;
 margin:auto;
}

.exercise-post th, .exercise-post td {
  padding:15px;
}

.food-post th, .food-post td {
  padding:15px;
}

h5.header {
  color: black;

}

@media(max-width: 1407px) {
  .box.table.posts {
    max-width: none;
  }

  #food-section {
    float:none;
    max-width: 700px; 
    margin: auto;
  }

  #ex-section {
    float: none;
    max-width: 700px;
    margin: auto;
    margin-top: 0px;
  }
}

@media(max-width: 911px) {
  img#update-pic.card-image {
    margin-left: auto;
  }

  .box.table {
    margin-right: 15px;
  }

#food-section {
    max-width: 300px; 
  }

  #ex-section {
    max-width: 300px;
  }

  #mobile-table {
    display: block;
  }

  #mobile-table caption {
    width:250px;
  }


  #mobile-food-table {
    display: block;
  }

  #mobile-food-table caption {
    width:250px;
  }

  #reg-table {
    display: none;
  }

  #reg-food-table {
    display: none;
  }

   h3.update-title{
      margin-top:0px;
  }
}

@media(max-width: 660px) {
  #food-section {
    float:none;
    margin: auto;
    max-width:300px;
 }

 #ex-section {
   float: none;
   margin: auto;
   max-width:300px;
 } 
}

</style>
