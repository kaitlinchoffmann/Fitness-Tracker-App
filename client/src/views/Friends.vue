<template>
    <div class="container">
        <div class="section">
        <h2 class="title is-2 friend-title">Friends</h2><br/>    
        <div class="section box" style="max-width: 1000px;margin:auto;">
            <div v-if="allFriends.length > 0">
              <div v-for="user in allFriends" :key="user.userID">
                <img :src="user.Picture" id="user-pic" @click="userPage(user.userID)"/>
                <div class="user-name" @click="userPage(user.userID)">{{user.Name}}</div>
                <button class="button is-warning" @click="DeleteFriend(user.userID)">Delete Friend</button>
              <hr/>
              </div>
            </div>
            <div v-else>
              <div class="no-friends has-text-centered">No friends yet!</div>
            </div>
        </div>
        <div style="margin-bottom:150px;"></div>
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { allFriends, getFriends, deleteFriend } from "../models/Friends";
import { getSingleUser } from "../models/Users";

export default {
    data:()=>({
        User,
        allFriends
    }),
    mounted:function(){
        this.getAllFriends();
    },
    methods: {
       async userPage(id) {
           await getSingleUser(id);
           this.$router.push('/userpage');
        },
        async getAllFriends() {
            this.allFriends = await getFriends();
        },
        async DeleteFriend(id) {
            await deleteFriend(id);
            this.getAllFriends();
        }
    }
}
</script>

<style>
#user-pic {
    max-width: 200px;
    max-height: 150px;
    float:left;
    margin-right: 30px;
}
.user-name {
    font-size: 32px;
    margin-bottom:120px;
    color: slateblue;
}
.no-friends {
    color: slateblue;
    font-size: 25px;
}

@media(max-width: 500px) {
  h2.friend-title{
      margin-top:0px;
  }

  .user-name {
      margin-bottom: 20px;
  }

  #user-pic {
    margin:auto;  
    display: block;
    width: 100%;
    max-width: 400px;
    max-height: 250px;
    float:none;
  }
}
</style>