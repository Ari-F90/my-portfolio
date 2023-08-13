<template>
  <section id="tech" class="tech">
    <h1 class="tech-title">My Tech Stack</h1>
    <div class="front-div">
      FRONT-END
      <img class="tech-icon" src="../../public/img/html.png" alt="html" />
    </div>
    <div>BACK-END</div>
    <div>OTHER TOOLS</div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TechStack",
});
</script>

<style>
.tech {
  background-color: rgb(62, 10, 206);
  min-height: 100vh;
}
.tech-title {
  color: rgb(255, 255, 255);
  font-family: "Tektur", cursive;
  text-align: center;
  padding-top: 6rem;
  font-size: 3.5rem;
}
</style>
