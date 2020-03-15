import VueRouter from "../router";
import Home from "./home";
import About from "./about";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    }
  ]
})