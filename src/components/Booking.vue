<template>
  <div class="c2-level-one-container">
    <div class="c2-level-two-container">
      <button><router-link to="all">All</router-link></button>
      <button>
        <router-link to="upcomming">Up Comming</router-link>
      </button>
      <button><router-link to="today">Today</router-link></button>
      <button><router-link to="completed">Completed</router-link></button>
      <button><router-link to="refund">Refund</router-link></button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
name: "Info";
</script>

<style scoped>
.c2-level-one-container {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: black;
}
</style>
