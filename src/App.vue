<template>
  <HomePage />
  <AboutPage />
</template>

<script>
import { defineComponent } from "vue";
import HomePage from "./components/Homepage.vue";
import AboutPage from "./components/AboutPage.vue";

export default defineComponent({
  name: "App",
  components: {
    HomePage,
    AboutPage,
  },
});
</script>
