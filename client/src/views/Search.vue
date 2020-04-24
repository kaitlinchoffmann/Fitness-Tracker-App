<template>
    <div class="container">
        <div class="box">
            <button @click="userPage(0)">
            <input type="hidden" name="email" v-model=user>
            Name:
            {{allSearches[0].Name}}
            </button>

            <br><br><br>
            list:
            <div v-for="user in allSearches" :key="user.userID">
                <button @click="userPage(user.userID)">{{user}}
                </button>
                <br/>
                <br/>
            </div>
        </div>
    </div>    
</template>

<script>
import { allSearches } from "../models/Friends";
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