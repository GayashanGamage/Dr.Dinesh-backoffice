<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <h2 class="page-title">ENTER CODE</h2>
      <div class="level-three-container user-input">
        <input type="text" class="user-input-box" />
        <input type="text" class="user-input-box" />
        <input type="text" class="user-input-box" />
        <input type="text" class="user-input-box" />
      </div>
      <button class="action-button" @click="changePassword">
        Change password
      </button>
      <p class="action-button-resend">resend again..</p>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
name: "ConfirmCode";

const changePassword = () => {
  router.replace("/resetpassword");
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
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
}
.page-title {
  color: #000;
  font-family: Spartan;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 30px 116px;
}
.user-input {
  display: flex;
  flex-direction: row;
  width: 292px;
  height: auto;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.user-input-box {
  width: 25px;
  width: 51px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #c0c0c0;
  background: #fff;
  font-size: 3rem;
}
.action-button {
  width: 292px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0px;
  background: #595ff3;
  color: #ffffff;
  font-size: 1.8rem;
}
.action-button:hover {
  border: 1px solid #595ff3;
  background: #ffffff;
  color: #595ff3;
  font-size: 1.8rem;
}
.action-button-resend {
  font-size: 1.5rem;
  text-align: end;
  width: 292px;
  color: #bdbdbd;
  font-family: Spartan;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
}
.action-button-resend:hover {
  color: #000;
}
</style>
