<template>
  <div class="mainView">
    <nav-bar/>
    <router-view class="body"></router-view>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "MainView",
  components: { NavBar }
};
</script>

<style>
</style>
