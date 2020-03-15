import Vue from "vue";
import VueRouter from "../router";
import router from "./router";
import Main from "./index.vue";

Vue.use(VueRouter, router);
new Vue({
  el: "#app",
  components: {
    Main
  },
  render(h) {
    return h(Main)
  }
})