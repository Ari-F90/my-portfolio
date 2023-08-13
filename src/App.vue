<template>
  <HomePage />
  <AboutPage />
  <TechStack />
  <ContactPage />
</template>

<script>
import { defineComponent } from "vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import TechStack from "./components/TechStack.vue";
import ContactPage from "./components/ContactPage.vue";

export default defineComponent({
  name: "App",
  components: {
    HomePage,
    AboutPage,
    TechStack,
    ContactPage,
  },
});
</script>
