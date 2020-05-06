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
    </div></footer> 
 </div> 
</template>

<style lang="scss">

@media(max-width: 500px) {
  .subtitle .subhead {
    padding:10px;
  }
}

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

