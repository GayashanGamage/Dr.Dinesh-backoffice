<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <h2 class="page-title">ENTER NEW PASSWORD</h2>
      <input type="password" placeholder="Password" class="user-input" />
      <input
        type="password"
        placeholder="Re ente password"
        class="user-input"
      />
      <button class="action-button" @click="linkToHome">Change password</button>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
name: "Reset-password";

const linkToHome = () => {
  router.replace("/home");
};
</script>

<style scoped>
.level-one-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.level-two-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  height: auto;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
}
.page-title {
  color: #000;
  font-family: Spartan;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 30px 41px;
}
.user-input {
  outline: none;
  width: 282px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fff;
  margin-bottom: 18px;
}
.action-button {
  width: 292px;
  height: 38px;
  flex-shrink: 0;
  margin-bottom: 30px;
  background-color: #595ff3;
  color: #fff;
  border-radius: 4px;
  outline: none;
  border: 0px;
}
.action-button:hover {
  color: #595ff3;
  background-color: #fff;
  border: 1px solid #595ff3;
}
</style>
