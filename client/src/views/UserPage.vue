<template>
    <div class="container">
        <div class="section">
        <div id="delete"></div>
        <h2 class="title is-2 has-text">
          {{otherUser.Name}}     
        </h2>
        <div>
            <div>
                <img :src="otherUser.Picture" class="card-image" id="update-pic" alt="friend's photo">
            </div><br/>    
            <div v-if="friends==true">
                <button id="delete-btn" class="button is-light" @click="DeleteFriend()">Delete Friend</button><br/>
                
              <div id="ex-section">
                <h4 class="title is-4 ex-title">Shared Exercises</h4><br/>
                <div v-if="friendExPosts.length > 0">
                  <div class="box table posts" v-for="(x,ind) in friendExPosts" :key="x.date" id:x.date>
                    <table id="reg-table" class="table exercise-post">
                      <caption class="title is-5">Date: {{x.date}}</caption>
                      <thead>
                        <tr>
                          <th>Exercise</th>
                          <th>Type</th>
                          <th>Sets</th>
                          <th>Reps</th>
                          <th>Weight</th>
                          <th>Time(mins)</th>
                          <th>Intensity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="x in friendExPosts[ind].data" :key="x.exName" id:x.exName>
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
                      <tbody v-for="x in friendExPosts[ind].data" :key="x.exName" id:x.exName>
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
                          <th>Time(mins):</th>
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
                  Thay haven't shared any exercises yet!
                </div>
              </div>
              
              <div id="food-section">
                <h4 class="title is-4">Shared Food</h4><br/>
                <div v-if="friendFoodPosts.length > 0">
                  <div class="box table posts" v-for="(x,ind) in friendFoodPosts" :key="x.date" id:x.date>
                    <table id="reg-food-table" class="table food-post">
                      <caption class="title is-5">Date: {{x.date}}</caption>
                      <thead>
                        <tr>
                          <th>Food</th>
                          <th>Group</th>
                          <th>Calories</th>
                          <th>Protein</th>
                          <th>Carbs</th>
                          <th>Fat</th>
                          <th>Sugar</th>
                          <th>Sodium</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="x in friendFoodPosts[ind].data" :key="x.food" id:x.food>
                          <td>{{x.food}}</td>
                          <td>{{x.group}}</td>
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
                      <tbody id="mobile-food-content" v-for="x in friendFoodPosts[ind].data" :key="x.food" id:x.food>
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
                  They haven't shared any food yet!
                </div>
              </div><br/><br/>
            </div>
            <div v-else-if="friends==false && requestSent==false">
                <button id="request-btn" class="button is-light" @click="request()">Send Friend Request</button>
            </div>
            <div v-else>
                <div id="request-btn" class="button is-light">Request Sent</div>
            </div>
        </div><br/>

        <div style="margin-bottom:500px;"></div>          
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { otherUser } from "../models/Users";
import { sendRequest, SentRequests, allFriends, getSentRequests, deleteFriend, getFriends } from "../models/Friends"
import { friendExPosts, friendFoodPosts, getFriendPosts, getFriendFood } from "../models/Post";

export default {
    data:() => ({
        User,
        otherUser,
        User,
        friends: false,
        requestSent: false,
        allFriends,
        SentRequests,
        friendExPosts,
        friendFoodPosts
    }),
    mounted:function(){ 
        this.checkFriendship();
        this.allFriendPosts();
    },
    methods: {
        async checkFriendship() {
            this.allFriends = await getFriends();
            const friendship = this.allFriends.find(x => x.userID == otherUser.userID);
            if(friendship) {
                this.friends = true;
            }
            else {
                const request = SentRequests.find(x => x.requestId == this.otherUser.userID);
                if(request) {
                    this.requestSent = true;
                }
            }
        },
        async request() {
            await sendRequest(this.otherUser.userID, User.CurrentUser.Picture, User.CurrentUser.Name);
            await getSentRequests();
            document.getElementById('request-btn').innerHTML="Request Sent";
        },
        async allFriendPosts() {
            //get exercise posts
            this.friendExPosts = await getFriendPosts(this.otherUser.userID);
            let datesDesc = this.sortDates;
            this.friendExPosts = this.friendExPosts .sort(datesDesc);
          //get food posts
            this.friendFoodPosts = await getFriendFood(this.otherUser.userID);
            let datesDesc2 = this.sortDates;
            this.friendFoodPosts = this.friendFoodPosts.sort(datesDesc2);
        },
        async DeleteFriend() {
            this.friends = await deleteFriend(this.otherUser.userID);
            document.getElementById('delete').innerHTML="Friend Deleted";
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
#delete-btn, #request-btn {
  margin: auto;
  display: block;
}

#request-btn {
  max-width: 200px;
}

/* @media(max-width: 911px) {
  #delete-btn, #request-btn {
    margin: auto;
    display: block;
  }
} */
</style>