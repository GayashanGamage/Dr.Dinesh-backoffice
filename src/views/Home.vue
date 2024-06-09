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
  min-height: 94vh;
  max-height: auto;
  margin: 34px 28px 0 0;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
}
.level-three-container {
  background-color: #595ff3;
  height: 94vh;
  width: 315px;
  margin: 34px 30px;
  border-radius: 6px;
}
</style>
