<template>
  <div id="app">
    <h1>Home</h1>
    <div>{{ name }}</div>
    <button @click="name = '曾侃'">切换</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    name: ""
  }),
  methods: {}
};
</script>

<style lang="scss"></style>
