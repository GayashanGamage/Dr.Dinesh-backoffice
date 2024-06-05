<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <h1 class="heading-title">FORGET PASSWORD</h1>
      <div class="level-three-container back-button" @click="backButton()">
        <span class="back-button-sub material-icons"> arrow_back </span>
        <span class="back-button-sub button-text">Back</span>
      </div>
      <input type="text" placeholder="Email address" class="user-input" />
      <button class="button send-button" @click="sendCode">Send Code</button>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
name: "ForgetPassword";

const backButton = () => {
  router.replace("/");
};

const sendCode = () => {
  router.replace("/confirm-code");
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
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  height: auto;
  width: 400px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
}
.level-three-container {
  display: flex;
  align-items: center;
}
.material-icons {
  font-size: 1.8rem;
  align-content: start;
}
.button-text {
  font-size: 1.125rem;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  margin-top: 4px;
  margin-left: 1rem;
}
.back-button {
  margin-bottom: 1.8rem;
  width: 29.8rem;
  cursor: pointer;
}
.heading-title {
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0px;
  margin: 3rem 0 3rem 0;
}
.user-input {
  margin-bottom: 2rem;
  border-radius: 4px;
  width: 27rem;
  height: 3.8rem;
  font-size: 1.8rem;
  padding-left: 2rem;
  outline: none;
  border: 1px solid #d9d9d9;
}
.user-input::placeholder {
  color: #aaa5a5;
}
.send-button {
  margin-bottom: 3rem;
  border: 1px solid black;
  width: 29.3rem;
  height: 3.8rem;
  border-radius: 4px;
  border: 0px;
  background-color: #595ff3;
  color: #ffffff;
  font-size: 1.8rem;
}
.send-button:hover {
  color: #595ff3;
  background-color: #ffffff;
  border: 1px solid #595ff3;
  font-size: 1.8rem;
}
</style>
