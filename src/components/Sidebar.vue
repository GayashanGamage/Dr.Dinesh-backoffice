<template>
  <div class="c-level-one-container">
    <div class="c-level-two-container site-header">
      <h1 class="menu-item-header">BACK OFFICE</h1>
    </div>
    <div class="c-level-two-container menu-item">
      <p class="menu-item-text select-text">Home</p>
    </div>
    <div class="c-level-two-container menu-item">
      <p class="menu-item-text">Site info</p>
    </div>
    <div class="c-level-two-container menu-item">
      <p class="menu-item-text">Booking</p>
    </div>
    <div class="c-level-two-container menu-item select">
      <p class="menu-item-text">Manage timeslot</p>
    </div>
    <div class="c-level-two-container menu-item">
      <p class="menu-item-text">Client request</p>
    </div>
    <div class="c-level-two-container menu-item">
      <p class="menu-item-text">All client</p>
    </div>
    <div class="c-level-two-container log-out-button">
      <p class="log-out-text">Log out</p>
    </div>
  </div>
</template>

<script setup>
name: "Sidebar";
</script>

<style scoped>
.c-level-one-container {
  background-color: #595ff3;
  height: 94vh;
  width: 315px;
  margin: 34px 30px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
}
.menu-item-text {
  margin-left: 68px;
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 35px;
  font-weight: 300;
  margin-top: 12px;
  margin-bottom: 12px;
}
.site-header {
  margin: 68px 68px;
}
.menu-item-header {
  color: #fff;
  font-family: Spartan;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.log-out-button {
  margin: 38px 68px;
}
.log-out-text {
  font-weight: 500;
  font-size: 2.4rem;
  color: #fff;
}
.select {
  background: rgba(255, 247, 252, 0.3);
}
.select-text {
  font-weight: 600;
}
.menu-item:hover {
  background: rgba(255, 247, 252, 0.1);
}
</style>
