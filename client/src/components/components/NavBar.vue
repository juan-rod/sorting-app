<template>
  <div class="navbar">
    <div class="navbar__content maxW_1024">
      <h3 :style="fadeIn">Lunar Collective</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    fadeIn() {
      return {
        animation: "fade-in 3s",
        "animation-iteration-count": "1"
      };
    }
  }
};
</script>

<style>
</style>
