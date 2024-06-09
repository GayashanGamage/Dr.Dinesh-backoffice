<template>
  <div class="c1-level-one-container">
    <div class="c1-level-two-container">
      <h3 class="card-title">Next meeting</h3>
      <hr class="card-ruler" />
      <div class="c1-level-three-container">
        <div class="c1-level-four-container">
          <p class="content">with</p>
          <p class="content">about</p>
          <p class="content">time</p>
          <p class="content">date</p>
        </div>
        <div class="c1-level-four-container">
          <p class="content-data">Chamodi</p>
          <p class="content-data">Advanced level</p>
          <p class="content-data">13:00</p>
          <p class="content-data">2024.12.12</p>
        </div>
      </div>
    </div>
    <div class="c1-level-two-container">
      <h3 class="card-title">Booking Summary</h3>
      <hr class="card-ruler" />
      <div class="c1-level-three-container">
        <div class="c1-level-four-container">
          <p class="content">Total booking :</p>
          <p class="content">Future session :</p>
          <p class="content">Postponed session :</p>
          <p class="content">Refund session :</p>
        </div>
        <div class="c1-level-four-container">
          <p class="content-data">12</p>
          <p class="content-data">34</p>
          <p class="content-data">2</p>
          <p class="content-data">1</p>
        </div>
      </div>
    </div>
    <div class="c1-level-two-container">
      <h3 class="card-title">Member summery</h3>
      <hr class="card-ruler" />
      <div class="c1-level-three-container">
        <div class="c1-level-four-container">
          <p class="content">Total members :</p>
          <p class="content">Session members :</p>
          <p class="content">Non session members :</p>
        </div>
        <div class="c1-level-four-container">
          <p class="content-data">120</p>
          <p class="content-data">34</p>
          <p class="content-data">12</p>
        </div>
      </div>
    </div>
    <div class="c1-level-two-container">
      <h3 class="card-title">Tommorow avilable times</h3>
      <hr class="card-ruler" />
      <div class="time-slot-container">
        <p class="time-slot">13:00 - 14:00</p>
        <p class="time-slot">14:00 - 15:00</p>
      </div>
    </div>
    <div class="c1-level-two-container">
      <h3 class="card-title">Earning summary</h3>
      <hr class="card-ruler" />
      <div class="c1-level-three-container">
        <div class="c1-level-four-container">
          <p class="content">this month {{}}</p>
          <p class="content">may {{}}</p>
          <p class="content">appril {{}}</p>
        </div>
        <div class="c1-level-four-container">
          <p class="content-data">48,000</p>
          <p class="content-data">22,000</p>
          <p class="content-data">10,000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name: "homeComponent";
</script>

<style scoped>
.c1-level-one-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.c1-level-two-container {
  width: 320px;
  height: 320px;
  flex-shrink: 0;
  /* box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2); */
  border: 1px solid rgb(198, 171, 171);
  margin: 20px 24px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
}
.c1-level-three-container {
  display: flex;
}
.card-title {
  color: #000;
  font-family: Spartan;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin: 31px 0 12px 18px;
}
.card-ruler {
  width: 88%;
  align-self: center;
  margin: 0 0 37px 0px;
  border: 1px solid rgba(198, 171, 171, 0.5);
}
.content {
  color: #000;
  font-family: Spartan;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  text-transform: capitalize;
  margin: 0 0 13px 33px;
}
.content-data {
  font-weight: 400;
  font-size: 1.8rem;
  margin: 0 0 13px 20px;
}
.time-slot-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.time-slot {
  border: 1px solid rgba(198, 171, 171, 0.5);
  width: 80%;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 200;
  border-radius: 4px;
  padding: 6px;
}
</style>
