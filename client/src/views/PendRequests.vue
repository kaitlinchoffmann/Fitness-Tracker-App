<template>
    <div class="container">
        <div class="section">
        <h2 class="title is-2 pending-title">Pending Friend Requests</h2><br/>    
        <div class="section box" style="max-width: 1000px;margin:auto;">
            <div v-if="PendingRequests.length > 0">
              <div v-for="request in PendingRequests" :key="request.requestId">
                <div class="link-to-profile" @click="userPage(request.requestId)">  
                  <img :src="request.requestPicture" id="user-pic"/>
                  <div class="user-name">{{request.requestName}}</div>
                </div>
                <button class="button is-warning" @click="addUser(request.requestId)">Accept Request</button><br/><br/>
              <hr/>
              </div>
            </div>
            <div v-else>
              <div class="no-friends has-text-centered">No Pending Requests</div>
            </div>
        </div>
        <div style="margin-bottom:150px;"></div>
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { getSingleUser } from "../models/Users";
import { PendingRequests, getPendingRequests, addFriend, getFriends } from "../models/Friends";

export default {
    data:()=>({
        User,
        PendingRequests,
        otherUsers: []
    }),
    mounted:function(){
        this.pending();
    },
    methods: {
        async pending() {
            this.PendingRequests = await getPendingRequests();
        },
        async addUser(userId) {
            await addFriend(userId);
            this.PendingRequests = await getPendingRequests();
        },
        async userPage(id) {
           await getSingleUser(id);
           this.$router.push('/userpage');
        }
    }
}
</script>

<style>

@media(max-width: 500px) {
  h2.pending-title{
      margin-top:0px;
  }
}  
</style>