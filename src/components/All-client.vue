<template>
  <div class="c6-level-one-container">
    <h3 class="page-title">All Client Information</h3>
    <div class="c6-level-two-container">
      <p id="a1" class="ref-title">Name :</p>
      <p id="b1" class="ref-data">Camodi Janithya</p>
      <p id="a2" class="ref-title">Date :</p>
      <p id="b2" class="ref-data">3rd of June 2024</p>
      <p id="a3" class="ref-title">Perpose :</p>
      <p id="b3" class="ref-data">Advanced level</p>
      <button id="c3" class="data-view-button">More..</button>
    </div>
  </div>
</template>

<script setup>
name: "All-client";
</script>

<style scoped>
.c6-level-one-container {
  width: 100%;
  height: 100%;
}
.c6-level-two-container {
  margin: 25px;
  border-radius: 6px;
  box-shadow: 0px 0px 1px 0px #000;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "a1 b1 ."
    "a2 b2 ."
    "a3 b3 c3";
}
#a1 {
  grid-area: a1;
}
#b1 {
  grid-area: b1;
}
#a2 {
  grid-area: a2;
}
#b2 {
  grid-area: b2;
}
#a3 {
  grid-area: a3;
}
#b3 {
  grid-area: b3;
}
#c3 {
  grid-area: c3;
  justify-self: end;
  margin: 0 30px 20px 0;
}
.ref-title {
  font-size: 1.8rem;
  font-weight: 100;
  margin: 20px 0 0 20px;
}
.ref-data {
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 20px;
}
.data-view-button {
  width: 125px;
  height: 40px;
  flex-shrink: 0;
  background-color: #595ff3;
  color: #fff;
  border: 0px;
  border-radius: 4px;
}
.data-view-button:hover {
  width: 125px;
  height: 40px;
  flex-shrink: 0;
  color: #595ff3;
  background-color: #fff;
  border: 2px solid #595ff3;
  border-radius: 4px;
}
.page-title {
  font-size: 2.4rem;
  font-weight: 100;
  margin: 25px;
}
</style>
