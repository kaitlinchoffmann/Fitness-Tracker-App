<template>
  <div class="login">
    <LogForm></LogForm>
     <div class="subtitle has-text-centered">
          <p>New to Healthy Habits? Sign Up Now!</p><br/>
          <router-link class="button" to="/register">Register Healthy Habits Account</router-link>
        </div> 
    <div style="padding-bottom:100px;"></div>
  </div>
</template>

<style>

</style>

<script>
import LogForm from "@/components/LoginForm.vue";
export default {
  components: {
    LogForm
  }
}
</script>