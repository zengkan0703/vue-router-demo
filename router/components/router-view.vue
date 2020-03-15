<script>
export default {
  name: "router-view",
  data: () => ({
    current: "/"
  }),
  created() {
    window.addEventListener("hashchange", this.handleHashChange);

    const { routes } = this.$router;
    // 生成路由映射表
    this.routerMap = routes.reduce((p, n) => {
      p[n.path] = n;
      return p;
    }, {})
  },
  destroyed() {
    window.removeEventListener("hashchange", this.handleHashChange);
  },
  methods: {
    handleHashChange() {
      this.current = window.location.hash.slice(1);
    }
  },
  render(h) {
    return h(this.routerMap[this.current].component);
  }
};
</script>