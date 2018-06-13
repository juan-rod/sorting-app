<template>
  <div class="login border">
    <div class="login__container maxW_1024 border2">
      <a href="#" @click="getLogin">Login With Google</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    getLogin() {
      this.loginUser().then(result => {
        console.log("result:", result);
      });
    }
  }
};
</script>

<style>
</style>
