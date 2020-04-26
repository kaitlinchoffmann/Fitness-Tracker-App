<template>
    <div class="container">
        <div class="section">
        <h2 class="title is-2 has-text-left">
          {{otherUser.Name}}     
        </h2>
        <div style="float:left; margin-left:30px;">
            <div>
                <img :src="otherUser.Picture" class="card-image" alt="friend's photo">
            </div><br/>    
            <div v-if="friends==true">
                <button class="button is-light">Delete Friend</button>
                <div style="float:left;margin-left:7%;">
                  <div v-if="friendPosts.length > 0">
                    Exercises Shared by {{otherUser.Name}}:  
                    <div v-for="x in friendPosts" :key="x.exName" id:x.exName>
                      <div class="box">  
                          Date: {{x.date}}<br/>
                          Name: {{x.exName}}<br/>
                          Type: {{x.exType}}<br/>
                          Intensity: {{x.intensity}}<br/>
                          Sets: {{x.sets}}<br/>
                          Reps: {{x.reps}}<br/>
                          Time: {{x.time}}<br/>
                          Weight: {{x.weight}}<br/>
                      </div>
                      <br/>
                    </div>
                  </div>
                  <div class="box" v-else>
                    {{otherUser.Name}} hasn't shared any exercises yet!
                </div>
        </div>
            </div>
            <div v-else-if="friends==false && requestSent==false">
                <button id="request" class="button is-light" @click="request()">Send Friend Request</button>
            </div>
            <div v-else>
                <div id="request" class="button is-light">Request Sent</div>
            </div>
        </div>
        <div style="margin-bottom:500px;"></div>          
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { otherUser } from "../models/Users";
import { sendRequest, SentRequests, allFriends, getSentRequests } from "../models/Friends"
import { friendPosts, getFriendPosts } from "../models/Post";

export default {
    data:() => ({
        User,
        otherUser,
        User,
        friends: false,
        requestSent: false,
        allFriends,
        SentRequests,
        friendPosts
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
            await sendRequest(this.otherUser.userID, User.CurrentUser.userID, User.CurrentUser.Picture, User.CurrentUser.Name);
            await getSentRequests(this.User.CurrentUser.userID);
            document.getElementById('request').innerHTML="Request Sent";
        },
        async allFriendPosts() {
            this.friendPosts = await getFriendPosts(otherUser.userID);
            console.log("hi" + this.friendPosts);
        }
    }
}
</script>