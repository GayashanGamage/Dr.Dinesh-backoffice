<template>
  <div class="c1-level-one-container">
    <div class="c1-level-two-container">
      <h3>Next meeting</h3>
      <hr />
      <p>with {{}}</p>
      <p>about {{}}</p>
      <p>time {{}}</p>
      <p>date {{}}</p>
    </div>
    <div class="c1-level-two-container">
      <h3>Booking Summary</h3>
      <hr />
      <p>Total booking :</p>
      <p>Total session :</p>
      <p>Future session :</p>
      <p>Postponed session :</p>
      <p>Refund session :</p>
    </div>
    <div class="c1-level-two-container">
      <h3>Member summery</h3>
      <hr />
      <p>Total members :</p>
      <p>Session members :</p>
      <p>Non session members :</p>
    </div>
    <div class="c1-level-two-container">
      <h3>Tommorow avilable times</h3>
      <hr />
      <div class="c1-level-three-container">
        <p>13:00 - 14:00</p>
      </div>
    </div>
    <div class="c1-level-two-container">
      <h3>Earning summary</h3>
      <hr />
      <p>this month {{}}</p>
      <p>may {{}}</p>
      <p>appril {{}}</p>
    </div>
  </div>
</template>

<script setup>
name: "homeComponent";
</script>

<style scoped>
.c1-level-one-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
