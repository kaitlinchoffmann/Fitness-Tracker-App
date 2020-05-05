<template>
    <div class="container">
        <div class="section">
        <div id="delete"></div>
        <h2 class="title is-2 has-text-left">
          {{otherUser.Name}}     
        </h2>
        <div>
            <div>
                <img style="margin-left:3%;" :src="otherUser.Picture" class="card-image" alt="friend's photo">
            </div><br/>    
            <div v-if="friends==true">
                <button style="margin-left:3%;" class="button is-light" @click="DeleteFriend()">Delete Friend</button><br/>
                
              <div style="float:left;">
                <h4 class="title is-4">Shared Exercises</h4><br/>
                <div v-if="friendExPosts.length > 0">
                  <div v-for="(x,ind) in friendExPosts" :key="x.date" id:x.date>
                    <table id="exercise-post" class="table">
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
                    </div>
                  </div>
                <div class="box" v-else>
                  You haven't shared any exercises yet!
                </div>
              </div>
              
              <div style="float:right;">
                <h4 class="title is-4">Shared Food</h4><br/>
                <div v-if="friendFoodPosts.length > 0">
                  <div v-for="(x,ind) in friendFoodPosts" :key="x.date" id:x.date>
                    <table id="food-post" class="table">
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
                    </div>
                  </div>
                <div class="box" v-else>
                  You haven't shared any food yet!
                </div>
              </div><br/><br/>
            </div>
            <div v-else-if="friends==false && requestSent==false">
                <button id="request" class="button is-light" @click="request()">Send Friend Request</button>
            </div>
            <div v-else>
                <div id="request" class="button is-light">Request Sent</div>
            </div>
        </div><br/>

        <div style="margin-bottom:500px;"></div>          
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { otherUser } from "../models/Users";
import { sendRequest, SentRequests, allFriends, getSentRequests, deleteFriend } from "../models/Friends"
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
        checkFriendship() {
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
            document.getElementById('request').innerHTML="Request Sent";
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
            console.log(this.otherUser.userID);
            this.friends = await deleteFriend(this.otherUser.userID);
            console.log(this.friends);
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