<template>
<div>
  <div class="container">
      <h1 class="block title is-2">
        Healthy Habits
      </h1>
      <div class="subtitle has-text-centered">
        <div class="subhead">Eat</div>
        <div class="subhead">Exercise</div>
        <div class="subhead">Track</div>
      </div>
    </div>
    <div>
      <img src="../assets/food.png" alt="Healthy Food" class="my-image">
    </div>
    <p class="subtitle">
      Instill Better Habits Today
    </p>
    <div style="padding-bottom: 50px;"></div>
  <footer class="footer"><div class="content has-text-centered">
    A Web App by Kaitlin Hoffmann
    {{bobby}}
    </div></footer> 
 </div> 
</template>

<style lang="scss">

footer.footer {
  background-color: slateblue;
  color: white;
  text-align: center;
}

.my-image {
  margin: auto;
  padding-top: 0px;
  display: block;
  width: 400px;
}

</style>

<script>
import test from "@/models/test.js";
export default {
  name: 'BobbySingle',
  data(){
    return{
      bobby: {}
    }
  },
  created() {
    this.getBobbyData();
  },
  methods: {
    async getBobbyData() {
      test.getBobbySingle(100)
      .then(
        (bobby => {
          this.$set(this, "bobby", bobby);
        }).bind(this)
      );
    }
  }
}
</script>
