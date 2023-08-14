<template>
  <section id="projects" class="projects">
    <div>
      <CardProject title="Herland"></CardProject>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import CardProject from "../components/CardProject.vue";

export default defineComponent({
  name: "ProjectsList",
  components: { CardProject },
});
</script>

<style>
.projects {
  background-color: rgba(157, 205, 205, 255);
  min-height: 100vh;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 6rem;
}

.projects-title {
  color: rgb(255, 255, 255);
  font-family: "Tektur", cursive;
  text-align: center;
  padding-top: 4rem;
  font-size: 3rem;
}
</style>
