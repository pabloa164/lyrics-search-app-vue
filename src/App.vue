<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
  methods: {
    ...mapActions(["getInitialTracks"])
  },
  mounted() {
    this.getInitialTracks();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
body {
  font-family: "Montserrat", sans-serif;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
