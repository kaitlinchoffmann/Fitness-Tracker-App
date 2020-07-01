<template>
    <div class="container">
      <div class="section">
        <div class="box" style="max-width: 1000px;margin:auto;">
          <div style="margin-bottom:10px;">
            <input type="text" class="input is-small" v-model="userSearched" placeholder="search users..." style="width:300px;">
            <button class="button is-light is-small" @click="searchUsers">Search</button>
          </div>
          <div v-if="allSearches != null">
            <div v-if="allSearches.length > 0">
            <h3 class="title is-3">Search Results:</h3>
            <div v-for="user in allSearches" :key="user.userID">
                <hr/>
                <div class="link-to-profile">
                  <img :src="user.Picture" id="user-pic" @click="userPage(user.userID)"/>
                  <div class="user-name" @click="userPage(user.userID)">{{user.Name}}</div>
                </div>  
            </div>
            </div>
            <div class="no-results has-text-centered" v-else>
                <hr/>
                Sorry, no users by that name.
            </div>
         </div>   
      </div>
      <div style="margin-bottom:500px;"></div>
      </div>
    </div>
</template>

<script>
import { allSearches } from "../models/Users";
import { getSingleUser } from "../models/Users";
import { getUsers } from "../models/Users";

export default {
    data:() => ({
        userSearched: '',
        allSearches,
        user: ''
    }),
    methods: {
       async userPage(id) {
           await getSingleUser(id);
           this.$router.push('/userpage');
        },
       async searchUsers() {
           try {
             this.allSearches = await getUsers(this.userSearched);
           } catch (error) {
             console.log(error);
           }
       }
    }
}
</script>

<style>
.no-results {
    margin-top: 50px;
    margin-bottom: 20px;
    color: slateblue;
    font-size: 25px;
}
</style>