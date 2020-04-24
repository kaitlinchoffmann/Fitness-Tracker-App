<template>
    <div class="container">
        <div class="box">
            {{otherUser}}
            <br/>
            <div v-if="friends==true">
                <button class="button is-light">Delete Friend</button>
            </div>
            <div v-else-if="friends==false && requestSent==false">
                <button id="request" class="button is-light" @click="request()">Send Friend Request</button>
            </div>
            <div v-else>
                <div id="request" class="button is-light">Request Sent</div>
            </div>
        </div>
    </div>
</template>

<script>
import User from "../models/Users";
import { otherUser } from "../models/Users";
import { sendRequest, SentRequests, allFriends, getSentRequests } from "../models/Friends"

export default {
    data:() => ({
        User,
        otherUser,
        User,
        friends: false,
        requestSent: false,
        allFriends,
        SentRequests
    }),
    mounted:function(){
        this.checkFriendship()
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
            await sendRequest(this.otherUser.userID, User.CurrentUser.userID);
            await getSentRequests(this.User.CurrentUser.userID);
            document.getElementById('request').innerHTML="Request Sent";
        }
    }
}
</script>