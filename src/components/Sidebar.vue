<template>
  <div class="c-level-one-container">
    <div class="c-level-two-container site-header">
      <h1 class="menu-item-header">BACK OFFICE</h1>
    </div>
    <div
      class="c-level-two-container menu-item select"
      id="home-tab"
      @click="selectTab('/office/home', 'home-tab')"
    >
      <p class="menu-item-text select-text">Home</p>
    </div>
    <div
      class="c-level-two-container menu-item"
      id="info-tab"
      @click="selectTab('/office/info', 'info-tab')"
    >
      <p class="menu-item-text">Site info</p>
    </div>
    <div
      class="c-level-two-container menu-item"
      id="booking-tab"
      @click="selectTab('/office/booking', 'booking-tab')"
    >
      <p class="menu-item-text">Booking</p>
    </div>
    <div
      class="c-level-two-container menu-item"
      id="timeslot-tab"
      @click="selectTab('/office/timeslot', 'timeslot-tab')"
    >
      <p class="menu-item-text">Manage timeslot</p>
    </div>
    <div
      class="c-level-two-container menu-item"
      id="request-tab"
      @click="selectTab('/office/request', 'request-tab')"
    >
      <p class="menu-item-text">Client request</p>
    </div>
    <div
      class="c-level-two-container menu-item"
      id="clients-tab"
      @click="selectTab('/office/clients', 'clients-tab')"
    >
      <p class="menu-item-text">All client</p>
    </div>
    <div class="c-level-two-container log-out-button" @click="logout">
      <p class="log-out-text">Log out</p>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
name: "Sidebar";

const selectTab = (tab_link, tab_id) => {
  var allTabs = document.getElementsByClassName("menu-item");
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove("select");
  }
  document.getElementById(tab_id).classList.add("select");
  router.push(tab_link);
};

const logout = () => {
  let token = ref(null);

  const allCookies = document.cookie.split("; ");
  for (let i = 0; i < allCookies.length; i++) {
    const selectedCookie = allCookies[i].split("=");
    if (selectedCookie[0] === "admin") {
      token = selectedCookie[1];
    }
  }
  document.cookie =
    "admin =" + token.value + "; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  localStorage.removeItem("username");
  router.replace("/");
};
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
  font-weight: 300;
  text-decoration: none;
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
  margin: 68px 50px;
  border-radius: 4px;
}
.log-out-button:hover {
  background-color: rgba(255, 247, 252, 0.3);
}
.log-out-text {
  font-weight: 500;
  font-size: 2.4rem;
  color: #fff;
  margin: 10px 18px;
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
.menu-item {
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
