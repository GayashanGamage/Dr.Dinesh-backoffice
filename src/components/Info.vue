<template>
  <div class="c4-level-one-container">
    <div class="c4-level-two-container">
      <p id="a1" class="ref-title">Last Login :</p>
      <p id="b1" class="ref-data">2024-12-12 13:23</p>
      <p id="a2" class="ref-title">Mobile number :</p>
      <p id="b2" class="ref-data">071 23 45 678</p>
      <button id="c2" class="data-change-button">Change</button>
      <p id="a3" class="ref-title">Default e-mail :</p>
      <p id="b3" class="ref-data">info@dfernando.com</p>
      <button id="c3" class="data-change-button">Change</button>
      <p id="a4" class="ref-title">Replay e-mail :</p>
      <p id="b4" class="ref-data">onreplay@dfernando.com</p>
      <button id="c4" class="data-change-button">Change</button>
      <p id="a5" class="ref-title">Password :</p>
      <button id="b5" class="data-change-button">Change</button>
    </div>
  </div>
</template>

<script setup>
name: "Info";
</script>

<style scoped>
.c4-level-one-container {
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.c4-level-two-container {
  margin: 76px 32px;
  width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "a1 b1 ."
    "a2 b2 c2"
    "a3 b3 c3"
    "a4 b4 c4"
    "a5 . b5";
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
#c2 {
  grid-area: c2;
}
#a3 {
  grid-area: a3;
}
#b3 {
  grid-area: b3;
}
#c3 {
  grid-area: c3;
}
#a4 {
  grid-area: a4;
}
#b4 {
  grid-area: b4;
}
#c4 {
  grid-area: c4;
}
#a5 {
  grid-area: a5;
}
#b5 {
  grid-area: b5;
}
.ref-title {
  font-size: 1.8rem;
  font-weight: 100;
  margin-bottom: 35px;
}
.ref-data {
  font-size: 1.8rem;
  font-weight: 400;
}
.data-change-button {
  width: 145px;
  height: 40px;
  color: #fff;
  background-color: #595ff3;
  border: 0px;
  border-radius: 4px;
  font-size: 1.4rem;
}
.data-change-button:hover {
  color: #595ff3;
  background-color: #fff;
  border: 2px solid #595ff3;
}
</style>
