<template>
  <div class="arrow-container">
    <a href="#home">
      <img class="arrow" alt="move-up arrow" src="../../public/img/up.png" />
      ></a
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowUp",
});
</script>

<style>
.arrow-container {
  padding-right: 3rem;
}
.arrow {
  width: 3rem;
  display: block;
  position: fixed;
  bottom: 3rem;
  right: 91rem;
}
</style>
