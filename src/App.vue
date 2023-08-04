<template>
  <HomePage />
  <AboutPage />
  <TechStack />
</template>

<script>
import { defineComponent } from "vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import TechStack from "./components/TechStack.vue";

export default defineComponent({
  name: "App",
  components: {
    HomePage,
    AboutPage,
    TechStack,
  },
});
</script>
