import Vue from "vue";
import Home from "./home.vue";

new Vue({
  el: "#app",
  components: {
    Home
  },
  render(h) {
    return h(Home)
  }
})