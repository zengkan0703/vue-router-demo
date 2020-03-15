<template>
  <a :href="toComputed">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "router-link",
  props: {
    to: String
  },
  computed: {
    toComputed() {
      return this.to.replace(/#?\/?/, "#/");
    }
  },
  methods: {}
};
</script>

<style lang="scss"></style>
