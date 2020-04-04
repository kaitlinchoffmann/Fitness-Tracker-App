<template>
<div class="container">
      <div class="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li class="my-dropdown">
            <router-link to="/foodhistory">Food</router-link>
              <div class="dropdown-cnt" v-if="User.CurrentUser">
                <router-link to="/food">Log Food</router-link>
              </div>  
          </li>
          <li class="my-dropdown">
            <router-link to="/exhistory">Exercise</router-link>
              <div class="dropdown-cnt" v-if="User.CurrentUser">
                <router-link to="/exercise">Log Exercise</router-link>
              </div>  
          </li>
          <li class="my-dropdown" v-if="User.CurrentUser">
          <router-link to="/profile">Profile</router-link>
              <div class="dropdown-cnt">
                <router-link to="/settings">Settings</router-link>
                <a href="#Logout" @click="logout">Logout</a>
              </div>  
          </li> 
          <div class="icon-content">
            <div v-if="!User.CurrentUser">  
              <li class="icon"><router-link to="/register">Register</router-link></li>
              <li class="icon icon-content">|</li>
              <li class="icon icon-content"><router-link to="/login">Login</router-link></li>
            </div> 
            <div v-else>
              <li class="icon-name">Hi, {{User.CurrentUser.Name}}!</li>  
            </div> 
            <li class="icon"><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
            <li class="icon"><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
          </div>
        </ul>
      </div>
</div>

<!--
    <div class="buttons">
        <div v-if="CurrentUser">
            Welcome, {{CurrentUser.Name}}
        </div>
        <div v-else>
            <a class="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="/login">
                Log in
            </a>
        </div>
    </div> -->
</template>

<script>
import { Logout, CurrentUser } from "../models/Profile";
import User from "../models/Profile";

export default {
    data: ()=>({
    isOpen: false, 
    User: User
  }),
  methods: {
    logout() {
        Logout()
        this.$router.push('/login');
    }
},
    props: {
        CurrentUser: Object
    }
}
</script>

<style>
</style>