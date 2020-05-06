<template>
<div id="nav-container" class="container"> 
  <LoginComp :CurrentUser="User.CurrentUser"></LoginComp>
</div>     
</template>

<script>
import LoginComp from "./LoginComponent";
import User from "../models/Users";

export default {
  data: ()=>({
    isOpen: false, 
    User: User
  }),
  components: {
    LoginComp
  }

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

.icon-name {
  float: right;
  margin-right: 0px;
  width: 4.5rem;
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
  // backgroun
}

a:active {
  color: rgb(255, 123, 0);
}

a:focus {
  color: rgb(255, 123, 0);
}

.dropdown-cnt {
  display: none;
  position: absolute;
  border-radius: 5px;
  border: 1px solid rgb(228, 228, 228);
  overflow: hidden;
  z-index: 1;
}

.dropdown-cnt a {
  display: block;
  padding: 10px;
  text-align: left;
  background-color: white;
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

#nav-container {
  padding: 20px;
}
</style>