<template>
  <section class="card">
    <h1 class="card-title">{{ title }}</h1>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardProject",
  props: ["title", "stack", "image", "link", "github"],
});
</script>

<style></style>
