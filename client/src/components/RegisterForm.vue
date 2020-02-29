<template>
  <div>
    <div class="container">  
      <h1 class="block title is-2"><router-link id="main" to="/">Healthy Habits</router-link></h1>
    </div>
    <div>
      <img src="../assets/food.png" alt="Healthy Food" class="my-tiny-image">
    </div>
    <div class="container">      
        <form class="box" style="max-width:500px;margin:auto;" action="#login">
          <h3 class="title is-3 has-text-centered fcolor">Register</h3><hr>
          <div class="field">    
            <label class="label fcolor">Name</label>  
            <div class="control">  
              <input type="text" class="input" name="userName">
            </div>
          </div>
          <div class="field">    
            <label class="label fcolor">Email</label>  
            <div class="control">  
              <input type="text" class="input" name="userEmail">
            </div>
          </div>
          <div class="field">
          <label class="label fcolor">Password</label>
          <div class="control">
            <input type="text" class="input" name="userPw">  
          </div>
          </div>
          <div class="field">
            <label class="label fcolor">Confirm Password</label>
            <div class="control">
              <input type="text" class="input" name="confirmPw">  
            </div>
            </div>
          <div class="field">
            <input class="button" type="submit" value="Sign Up">  
          </div>
        </form>
  </div>  
  </div>
</template>

<style>

h3.fcolor, label.fcolor {
  color: slateblue;
}

#main:hover {
    color: #503cd1; 
}

.button {
  background-color: slateblue;
  color: white;
}

.button:visited {
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

.my-tiny-image {
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: block;
  width: 150px; 
}

h1.title, p.subtitle, #main {
  color: slateblue;
  text-align: center;
  margin-top: 40px;
  text-shadow: 4px 4px 4px lightblue;
}

</style>