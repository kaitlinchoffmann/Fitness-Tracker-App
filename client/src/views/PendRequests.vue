<template>
    <div class="container">
        <div class="box">
            <div v-for="request in PendingRequests" :key="request.userID">
                {{request}}
                {{request.requestId}}
                <button @click="addUser(request.requestId)">Accept Request</button>
                <!-- <button @click="deleteRequest">Deny request</button> -->
                <br/>
                <br/>
            </div>
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { PendingRequests, getPendingRequests, addFriend } from "../models/Friends";
export default {
    data:()=>({
        User,
        PendingRequests
    }),
    mounted:function(){
        this.pending();
    },
    methods: {
        async pending() {
            this.PendingRequests = await getPendingRequests(User.CurrentUser.userID);
        },
        async addUser(userId) {
            await addFriend(userId, User.CurrentUser.userID);
        }
    }
}
</script>