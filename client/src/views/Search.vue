<template>
    <div class="container">
        <div class="box">
            <div v-if="allSearches.length > 0">
            list:
            <div v-for="user in allSearches" :key="user.userID">
                <button @click="userPage(user.userID)">{{user}}
                </button>
                <br/>
                <br/>
            </div>
            </div>
            <div v-else>
                Sorry, no users by that name.
            </div>
        </div>
    </div>    
</template>

<script>
import { allSearches } from "../models/Users";
import { getSingleUser } from "../models/Users";

export default {
    data:() => ({
        allSearches,
        user: ''
    }),
    methods: {
       async userPage(id) {
           await getSingleUser(id);
            // const user = id;
            // console.log(user); //do getPage to get their page from server
            this.$router.push('/userpage');
        }
    }
}
</script>