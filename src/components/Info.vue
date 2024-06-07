<template>
  <div class="c4-level-one-container">
    <div class="c4-level-two-container">
      <p>Last Login : <slot>2024-12-12 13:23</slot></p>
    </div>
    <div class="c4-level-two-container">
      <p>Mobile number : <slot>071 23 45 678</slot></p>
      <button>Change</button>
    </div>
    <div class="c4-level-two-container">
      <p>Default e-mail : <slot>info@dfernando.com</slot></p>
      <button>Change</button>
    </div>
    <div class="c4-level-two-container">
      <p>Replay e-mail : <slot>noreplay@dfernando.com</slot></p>
      <button>Change</button>
    </div>
    <div class="c4-level-two-container">
      <p>Password :</p>
      <button>Change password</button>
    </div>
    <div class="c4-level-two-container"></div>
  </div>
</template>

<script setup>
name: "Info";
</script>

<style scoped>
.c4-level-one-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.c4-level-two-container {
  display: flex;
  flex-direction: row;
}
</style>
