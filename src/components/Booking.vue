<template>
  <div class="c2-level-one-container">
    <div class="c2-level-two-container">
      <button
        @click="nextPage('all', 'all')"
        class="action-button select"
        id="all"
      >
        All
      </button>
      <button
        @click="nextPage('upcomming', 'upcomming')"
        class="action-button"
        id="upcomming"
      >
        Upcomming
      </button>
      <button
        @click="nextPage('today', 'today')"
        class="action-button"
        id="today"
      >
        Today
      </button>
      <button
        @click="nextPage('completed', 'completed')"
        class="action-button"
        id="completed"
      >
        Completed
      </button>
      <button
        @click="nextPage('refund', 'refund')"
        class="action-button"
        id="refund"
      >
        Refund
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import router from "@/router";
name: "Info";

const nextPage = (link, buttonId) => {
  var allActionButton = document.getElementsByClassName("action-button");
  for (let i = 0; i < allActionButton.length; i++) {
    allActionButton[i].classList.remove("select");
  }
  document.getElementById(buttonId).classList.add("select");
  router.push(link);
};
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
.c2-level-two-container {
  margin: 0 0 0 25px;
}
.action-button {
  min-width: 90px;
  max-width: auto;
  height: 40px;
  flex-shrink: 0;
  color: #595ff3;
  background-color: #fff;
  border: 1px solid #595ff3;
  outline: none;
  border-radius: 4px;
  margin: 23px 10px 15px 0;
}
.select {
  background-color: #595ff3;
  color: #fff;
  border: 0px;
}
</style>
