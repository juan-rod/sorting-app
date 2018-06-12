<template>
  <div class="mainView">
    <nav-bar/>
    <the-grid/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import TheGrid from "../components/TheGrid.vue";
export default {
  name: "MainView",
  components: { NavBar, TheGrid }
};
</script>

<style>
</style>
