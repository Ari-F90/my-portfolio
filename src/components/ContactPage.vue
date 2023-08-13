<template>
  <section id="contact" class="contact">
    <h1 class="contact-title">Let's get in touch!</h1>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
});
</script>

<style>
.contact {
  background-color: rgb(156, 144, 144);
  min-height: 100vh;
}

.contact-title {
  color: rgb(255, 255, 255);
  font-family: "Tektur", cursive;
  text-align: center;
  padding-top: 4rem;
  font-size: 3rem;
}
</style>
