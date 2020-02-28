<template>
<div class="section">
    <div class="container">
      <div class="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li class="my-dropdown">
            <a href="#Track">Track</a>
              <div class="dropdown-cnt">
                <a href="#Goals">Goals</a>
                <a href="#Exercise">Exercise</a>
                <a href="#Food">Food</a>
              </div>  
          </li>
          <li class="my-dropdown">
            <a href="#Profile">Profile</a>
              <div class="dropdown-cnt">
                <a href="#Settings">Settings</a>
                <a href="#Logout">Logout</a>
              </div>  
          </li> 
          <div class="icon-content">
            <li class="icon"><router-link to="/register">Register</router-link></li>
            <li class="icon icon-content">|</li>
            <li class="icon icon-content"><router-link to="/login">Login</router-link></li>
            <li class="icon"><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
            <li class="icon"><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
          </div>
        </ul>
      </div>
    </div>
  </div>     
</template>

<script>
export default {
    
}
</script>

<style lang="scss"> 
h1.title, p.subtitle {
  color: slateblue;
  text-align: center;
  margin-top: 40px;
  text-shadow: 4px 4px 4px lightblue;
}

h3.fcolor, label.fcolor {
  color: slateblue;
}

.button {
  background-color: slateblue;
  color: white;
}

.button:hover {
  color: white;
  background-color: #503cd1;
}

.button:focus{
  color: white;
  background-color: #503cd1;
}

.to-home {
  color: slateblue;
}

.to-home:hover {
  color: #503cd1;
}

li {
  float: left;
}

li a {
  padding: 20px;
}

.icon {
  float: right;
  margin-right: 50px;
}

.icon-content {
  color: rgb(255, 123, 0);
  margin-right: 0px;
  margin-left: 0px;
  padding-right: 30px;
}

.icon a {
  padding: 40px;
}

a:link {
  color: rgb(255, 174, 0);
}

a:visited {
  color: rgb(255, 174, 0);  
}

a:hover {
  color: rgb(255, 81, 0);
}

a:focus {
  color: rgb(255, 123, 0);
}

#background {
    background-image: linear-gradient(to top, rgba(0, 225, 255, 0.4),rgba(0, 225, 225, 0));
}

.dropdown-cnt {
  display: none;
  position: absolute;
  z-index: 1;
}

.dropdown-cnt a {
  display: block;
  padding-bottom: 0px;
  text-align: left;
}

.my-dropdown:hover .dropdown-cnt {
  display: block;
  position: absolute;
}

.my-image {
  margin: auto;
  padding-top: 0px;
  display: block;
  width: 400px;
}

.my-tiny-image {
  margin: auto;
  padding-top: 40px;
  display: block;
  width: 150px;
}

.subhead {
  padding: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style-type: none;
  text-align: center;
  display: inline-block;
  color: slateblue; 
  text-shadow: 2px 2px 2px lightblue; 
}

div.subtitle {
  padding-top: 40px;
  padding-bottom: 40px;
  color: slateblue;
}

hr {
  margin-top: 0px;
}
</style>