<template>
    <div class="container">
        <div class="section">
        <h2 class="title is-2 friend-title">Friends</h2><br/>  
        <!-- Searching for friends -->
        <div>
            <input id="search-bar" type="text" class="input is-small" v-model="friendSearched" placeholder="search friends...">
        </div>  
        <div class="section box" style="max-width: 1000px;margin:auto;">
            <div v-if="friendSearch != null">
              <div v-if="friendSearch.length > 0"> 
                <div v-for="user in friendSearch" :key="user.userID">
                  <div class="link-to-profile" @click="userPage(user.userID)">
                    <img :src="user.Picture" id="user-pic" />
                    <div class="user-name">{{user.Name}}</div>
                  </div>    
                  <button class="button is-warning" @click="DeleteFriend(user.userID)">Delete Friend</button><br/><br/>
                <hr/>
                </div>
              </div> 
              <div v-else-if="allFriends.length === 0">
                <div class="no-friends has-text-centered">No friends yet!</div>
              </div>
              <div v-else>
                  <div class="no-friends has-text-centered">No friends by that name</div>
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
import { allFriends, getFriends, deleteFriend, friendSearch, findFriend, findFriend2 } from "../models/Friends";
import { getSingleUser } from "../models/Users";

export default {
    data:()=>({
        User,
        allFriends,
        friendSearched: '',
        friendSearch: allFriends
    }),
    mounted:function(){
        this.getAllFriends();
    },
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
            this.friendSearched = '';
            this.allFriends = await getFriends();
            this.friendSearch = await getFriends();
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
                this.friendSearch = allFriends;
           }
       }

    }
}
</script>

<style>
#search-bar {
  margin-bottom:30px;
  display: block;
  border-radius: 5px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

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

.link-to-profile:hover {
    cursor: pointer;
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