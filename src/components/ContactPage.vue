<template>
  <section id="contact" class="contact">
    <h1 class="contact-title">Let's get in touch!</h1>
    <div class="contact-icons">
      <a v-bind:href="'mailto:ariadna.812@gmail.com'">
        <img
          class="contact-icon"
          src="../../public/img/gmail.png"
          alt="gmail"
        />
      </a>

      <a href="https://github.com/Ari-F90">
        <img
          class="contact-icon"
          src="../../public/img/github.png"
          alt="github"
      /></a>
      <a href="https://es.linkedin.com/in/ariadnafriasdiaz/">
        <img
          class="contact-icon"
          src="../../public/img/linkedin.png"
          alt="linkedin"
      /></a>
    </div>
    <FooterPage></FooterPage>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import FooterPage from "../components/FooterPage.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    FooterPage,
  },
});
</script>

<style>
.contact {
  background-color: rgb(156, 144, 144);
  min-height: 100vh;
  padding-left: 2rem;
  padding-right: 2rem;
}

.contact-title {
  color: rgb(255, 255, 255);
  font-family: "Tektur", cursive;
  text-align: center;
  padding-top: 18rem;
  font-size: 3rem;
}

.contact-icons {
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding-bottom: 9rem;
}

.contact-icon {
  width: 5rem;
  cursor: pointer;
  transition: 0.7s;
}

.contact-icon:hover {
  transform: scale(1.3);
  opacity: 0.5;
  transition: 0.7s;
}

@media (max-width: 500px) {
  .contact {
    padding-bottom: 4rem;
  }
  .contact-icons {
    flex-direction: column;
  }
  .contact-title {
    padding-top: 10rem;
  }
}
</style>
