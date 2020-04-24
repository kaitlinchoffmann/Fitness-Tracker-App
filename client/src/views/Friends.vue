<template>
    <div class="container">
        <div class="box">
            <div v-for="user in allFriends" :key="user.userID">
                <button @click="userPage(user.userID)">{{user}}
                </button>
                <br/>
                <br/>

            </div>
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { allFriends, getFriends } from "../models/Friends";
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
            // const user = id;
            // console.log(user); //do getPage to get their page from server
            this.$router.push('/userpage');
        },
        async getAllFriends() {
            console.log(this.User.CurrentUser.userID);
            this.allFriends = await getFriends(User.CurrentUser.userID);
        }
    }
}
</script>