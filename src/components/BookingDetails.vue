<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <h4>Session - 01</h4>
      <hr />
      <div class="level-three-container">
        <div class="level-four-container">
          <p class="detail-title">Client</p>
          <p class="detail-title">Package</p>
          <p class="detail-title">Date</p>
          <p class="detail-title">Time</p>
        </div>
        <div class="level-four-container details">
          <p class="detail-data">Chamodi Senanayake</p>
          <p class="detail-data">After advanced level</p>
          <p class="detail-data">2nd of Octomber 2024</p>
          <p class="detail-data">13:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name: "BookingDetails";
</script>

<style scoped>
.level-two-container {
  display: flex;
  flex-direction: column;
  margin: 30px;
  border: 1px solid black;
  border-radius: 6px;
  padding: 20px;
}

.level-three-container {
  display: flex;
}
.details {
  margin-left: 500px;
}
.detail-title {
  font-size: 1.6rem;
  font-weight: 100;
  margin: 6px;
}
.detail-data {
  font-size: 1.6rem;
  font-weight: 400;
  margin: 6px;
}
</style>
