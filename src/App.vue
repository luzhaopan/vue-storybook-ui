<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("env", process.env.VUE_APP_BASE_API);
  }
};
</script>
