<template>
  <div class="register">
    <RegForm></RegForm>
    <div class="subtitle has-text-centered">
          <p>Already Have an Account? Login Now!</p><br/>
          <button class="button" onclick="window.location.href='login.htm';">Login to Healthy Habits</button>
        </div> 
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