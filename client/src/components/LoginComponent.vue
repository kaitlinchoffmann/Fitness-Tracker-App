<template>
<div class="container">
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">Home</router-link>
    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/about" class="navbar-item" active-class="is-current">About</router-link> 
        <div class="navbar-item has-dropdown is-hoverable" v-if="CurrentUser">
          <a class="navbar-item">Food</a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/foodhistory">Food History</router-link>
            <router-link class="navbar-item" to="/food">Log Food</router-link>
          </div>  
        </div>
        <div v-else class="navbar-item">
          <router-link class="navbar-item" to="/login">Food</router-link>
        </div> 
        <div class="navbar-item has-dropdown is-hoverable" v-if="CurrentUser">
          <a class="navbar-item">Exercise</a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/exhistory">Exercise History</router-link>
            <router-link class="navbar-item" to="/exercise">Log Exercise</router-link>
          </div>  
        </div>
        <div v-else class="navbar-item">
          <router-link class="navbar-item" to="/login">Exercise</router-link>
        </div>  
      <div class="navbar-item has-dropdown is-hoverable" v-if="CurrentUser">
        <a class="navbar-item">Account</a>
        <div class="navbar-dropdown">
          <div v-if="CurrentUser.IsAdmin==true">
            <router-link class="navbar-item" to="/admin">Admin</router-link>
          </div>
          <router-link class="navbar-item" to="/profile">Dashboard</router-link>
          <router-link class="navbar-item" to="/friends">Friends</router-link>
          <router-link class="navbar-item" to="/search">Search Users</router-link>
          <router-link class="navbar-item" to="/updates">Shared Progress</router-link>
          <router-link class="navbar-item" to="/pendingrequests">Pending Requests</router-link>
          <router-link class="navbar-item" to="/settings">Settings</router-link>
          <a class="navbar-item" href="#Logout" @click="logout">Logout</a>
        </div>  
      </div>  
    </div>
      <div class="navbar-end">
        <div v-if="!CurrentUser">  
          <div class="buttons">
            <router-link to="/register" class="button is-warning">Register</router-link>
            <router-link to="/login" class="button is-light">Log in</router-link>
          </div>
        </div> 
        <div v-else>
          <span class="navbar-item">Hi, {{CurrentUser.Name}}!</span>  
        </div> 
        <a class="navbar-item" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-lg" aria-hidden="true"></i></a>
        <a class="navbar-item" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f fa-lg" aria-hidden="true"></i></a>
      </div>
  </div>
</nav>
</div>
</template>

<script>
import { Logout } from "../models/Users";
import User  from "../models/Users";

export default {
  data:()=>({
    userSearched: '',
    isOpen: false
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

<style scoped>
.navbar {
  background-color: transparent;
}

.navbar-item, .navbar-link {
  color: rgb(255, 123, 0);
}

a.navbar-item:hover, .navbar-link:hover {
  color: red;
  background-color: transparent;
}

a.navbar-item:active, .navbar-link:active {
  color: red;
  background-color: transparent;
}

a.navbar-item:focus, .navbar-link:active {
  color:red;
  background-color: transparent;
}

.navbar-dropdown .navbar-item {
  color: rgb(255, 174, 0);
}

</style>