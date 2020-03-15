import VueRouter from "./router";
import RouterView from "./components/router-view";
import RouterLink from "./components/router-link";

VueRouter.install = function(Vue, router) {
  Vue.prototype.$router = router;
  Vue.component("router-view", RouterView);
  Vue.component("router-link", RouterLink);
}

export default VueRouter;
