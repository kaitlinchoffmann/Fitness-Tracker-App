<template>
<div class="container">
    <div class="box">
        <div v-for="x in updatedPosts" :key="x.exName" id:x.exName>
        Name: {{updatedPosts[0].exName}}
        </div>
        {{updatedPosts}}
    </div>
</div>
    
</template>

<script>
import User from "../models/Users";
import { getPosts, shareProgress, posts, updatedPosts } from "../models/Post";
import { allFriends } from "../models/Friends";

export default {
    data:()=>({
        updatedPosts,
        allFriends
    }),
    mounted:function() {
        this.getAllPosts();
    },
    methods: {
        async getAllPosts() {
            this.updatedPosts = await getPosts();
        }
    }
}
</script>
