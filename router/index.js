import VueRouter from "./router";

VueRouter.install = function(Vue, router) {
  Vue.prototype.$router = router;
}

export default VueRouter;
