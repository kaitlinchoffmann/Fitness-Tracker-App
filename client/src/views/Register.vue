<template>
  <div class="register">
    <RegForm></RegForm>
    <div class="subtitle has-text-centered">
          <p>Already Have an Account? Login Now!</p><br/>
          <router-link class="button" to="/login">Login to Healthy Habits</router-link>        </div> 
    <div style="padding-bottom:50px;"></div>
  </div>
</template>

<script>
import RegForm from "@/components/RegisterForm.vue";
export default {
  components: {
    RegForm
  }
}
</script>

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