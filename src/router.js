import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Lyrics from "./views/Lyrics.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/lyrics/track/:id",
      name: "lyrics",
      component: Lyrics
    }
  ]
});
