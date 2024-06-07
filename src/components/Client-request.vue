<template>
  <div class="c3-level-one-container">
    <div class="c3-level-two-container">
      <button>
        <router-link to="approved">Pending</router-link>
      </button>
      <button>
        <router-link to="pending">Refunded</router-link>
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
name: "Time-slot";
</script>

<style scoped>
.c3-level-one-container {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: black;
}
</style>
