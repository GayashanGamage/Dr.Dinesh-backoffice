<template>
  <div class="level-one-container">
    <div class="level-two-container sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="level-two-container content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
name: "Backoffice";
</script>

<style scoped>
.level-one-container {
  height: auto;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 75%;
  grid-template-areas: "sidebar content";
}
.sidebar {
  grid-area: sidebar;
  position: sticky;
  top: 0;
  height: 100vh;
}
.content {
  grid-area: content;
  border: 1px solid black;
  height: 100vh;
  margin: 34px 28px 0 0;
}
.level-three-container {
  background-color: #595ff3;
  height: 94vh;
  width: 315px;
  margin: 34px 30px;
  border-radius: 6px;
}
</style>
