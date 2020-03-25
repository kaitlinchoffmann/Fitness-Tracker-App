<template>
  <div class="login">
    <LogForm></LogForm>
     <div class="subtitle has-text-centered">
          <p>New to Healthy Habits? Sign Up Now!</p><br/>
          <router-link class="button" to="/register">Register Healthy Habits Account</router-link>
        </div> 
    <div style="padding-bottom:50px;"></div>
  </div>
</template>

<style scoped>

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

<script>
import LogForm from "@/components/LoginForm.vue";

export default {
  components: {
    LogForm
  }
}
</script>