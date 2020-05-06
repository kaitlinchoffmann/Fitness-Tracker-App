<template>
  <div id="app">
    <div id="background">
      <MyNav></MyNav>
      <hr class="hr"/>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss"> 
h1.title, h3.title, h4.title, p.subtitle {
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

#background {
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 225, 255, 0.4),rgba(0, 225, 225, 0));
  background-size: cover;
}

.dropdown-cnt {
  display: none;
  position: absolute;
  z-index: 1;
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

hr.hr {
  margin-top: 0px;
}

.box.table {
 overflow-x: auto;
}

</style>

<script>
import MyNav from "@/components/Nav.vue";
export default {
  components: {
    MyNav
  }
}
</script>
