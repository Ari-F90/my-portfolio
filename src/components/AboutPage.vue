<template>
  <section id="about" class="about">
    <h1 class="title">Hello</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio harum
      rem dolorem consequatur quidem accusamus beatae perspiciatis reprehenderit
      maxime necessitatibus laborum temporibus possimus adipisci libero
      quibusdam ipsum, neque omnis.
    </p>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
});
</script>

<style>
.about {
  background-color: rgb(255, 255, 255);
  min-height: 100vh;
}

.title {
  color: rgb(62, 10, 206);
  font-family: "Tektur", cursive;
  text-align: center;
  padding-top: 5rem;
}
</style>
