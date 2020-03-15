import VueRouter from "./router";
import RouterView from "./components/router-view";

VueRouter.install = function(Vue, router) {
  Vue.prototype.$router = router;
  Vue.component("router-view", RouterView);
}

export default VueRouter;
