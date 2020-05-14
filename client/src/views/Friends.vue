<template>
    <div class="container">
        <div class="section">
        <h2 class="title is-2 friend-title">Friends</h2><br/>  
        <!-- Searching for friends -->
        <div style="margin-bottom:10px;">
            <input type="text" class="input is-small" v-model="friendSearched" placeholder="search friends..." style="width:400px;">
        </div>  
        <div class="section box" style="max-width: 1000px;margin:auto;">
            <div v-if="friendSearch != null">
              <div v-if="friendSearch.length > 0"> 
                <div v-for="user in friendSearch" :key="user.userID">
                  <img :src="user.Picture" id="user-pic" @click="userPage(user.userID)"/>
                  <div class="user-name" @click="userPage(user.userID)">{{user.Name}}</div>
                  <button class="button is-warning" @click="DeleteFriend(user.userID)">Delete Friend</button>
                <hr/>
                </div>
              </div> 
              <div v-else>
                  <div class="no-friends has-text-centered">No friends by that name</div>
              </div>  
            </div>
            <div v-else>
              <!-- <div class="no-friends has-text-centered">No friends yet!</div> -->
              <div class="no-friends has-text-centered">Search your friends!</div>
            </div>
        </div>
        <div style="margin-bottom:150px;"></div>
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { allFriends, getFriends, deleteFriend, friendSearch, findFriend, findFriend2 } from "../models/Friends";
import { getSingleUser } from "../models/Users";

export default {
    data:()=>({
        User,
        // allFriends,
        friendSearched: '',
        friendSearch
    }),
    // mounted:function(){
    //     this.getAllFriends();
    // },
    watch: {
        friendSearched: function() {
            this.getResult();
        }
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
        },
       async getResult() {
        //    this.$route.params.friend = this.friendSearched;
           this.friendSearch = await findFriend(this.friendSearched);
        //    this.friendSearch = await findFriend2();
           if(this.friendSearched == '') {
                this.friendSearch = null;
           }
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