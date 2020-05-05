<template>
<div class="container">
      <div class="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li class="my-dropdown">
            <router-link to="/foodhistory">Food</router-link>
              <div class="dropdown-cnt" v-if="CurrentUser">
                <router-link to="/food">Log Food</router-link>
              </div>  
          </li>
          <li class="my-dropdown">
            <router-link to="/exhistory">Exercise</router-link>
              <div class="dropdown-cnt" v-if="CurrentUser">
                <router-link to="/exercise">Log Exercise</router-link>
              </div>  
          </li>
          <li class="my-dropdown" v-if="CurrentUser">
          <router-link to="/profile">Dashboard</router-link>
              <div class="dropdown-cnt">
                <div v-if="CurrentUser.IsAdmin==true">
                  <router-link to="/admin">Admin</router-link>
                </div>
                <router-link to="/friends">Friends</router-link>
                <router-link to="/search">Search Users</router-link>
                <router-link to="/updates">Shared Progress</router-link>
                <router-link to="/pendingrequests">Pending Requests</router-link>
                <router-link to="/settings">Settings</router-link>
                <a href="#Logout" @click="logout">Logout</a>
              </div>  
          </li> 
          <div class="icon-content">
            <div v-if="!CurrentUser">  
              <li class="icon"><router-link to="/register">Register</router-link></li>
              <li class="icon icon-content">|</li>
              <li class="icon icon-content"><router-link to="/login">Login</router-link></li>
            </div> 
            <div v-else>
              <li class="icon-name">Hi, {{CurrentUser.Name}}!</li>  
            </div> 
            <li class="icon"><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-lg" aria-hidden="true"></i></a></li>
            <li class="icon"><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f fa-lg" aria-hidden="true"></i></a></li>
          </div>
        </ul>
      </div>
</div>
</template>

<script>
import { Logout } from "../models/Users";
import User  from "../models/Users";

export default {
  data:()=>({
    userSearched: ''
    }),
  props: {
    CurrentUser: Object
  },
  methods: {
    async logout() {
      try {
        await User.Logout();
        this.$router.push('/login');
      } catch (error) {
        console.log(error);
      }
    }
}
}
</script>

<style>
</style>