<template>
  <section id="projects" class="projects">
    <h1 class="projects-title">Check them out!</h1>
    <div class="list-container">
      <CardProject
        title="HERLAND"
        image="../../img/herland.png"
        description="Full-stack Single-Page Application that aims to shed light on the stories of inspiring women who have not been recognized throughout the history and who have made significant contributions to their respective domains. The application allows users to filter these figures on specific categories such as sports, science, literature and more."
        stack="SASS modules | Typescript | React | Redux | NodeJS | Express | MongoDB | Jest | Firebase"
        link="https://herland.netlify.app/"
        github="https://github.com/Ari-F90/HerLand-front"
      ></CardProject>
      <CardProject
        title="FESTIVAPP"
        image="../../img/festivapp.png"
        description="Full-stack Single-Page Application (mobile-only) that allows users to create, update, and delete festivals on a marketplace platform."
        stack="SASS modules | Typescript | React | Redux | NodeJS | Express | MongoDB | JWT | Jest | Firebase"
        link="https://ariadna-frias-final-project-front.netlify.app/"
        github="https://github.com/Ari-F90/FestivApp-front"
      ></CardProject>
      <CardProject
        title="MY PORTFOLIO"
        image="../../img/portfolio.png"
        description="Personal website containing the information about my projects, tech stack, hobbies and contact data."
        stack="Javascript | VueJS"
        link="https://ariadna-frias-portfolio.netlify.app/"
        github="https://github.com/Ari-F90/my-portfolio"
      ></CardProject>
      <CardProject
        title="MOVIE EXPLORER"
        image="../../img/movieapi.png"
        description="Application that allows users to explore the latest movies showing now in cinemas, fetching data from the The Movie Database API (https://developer.themoviedb.org/)."
        stack="Javascript | React | Flux"
        link="https://moviesdborg-api.netlify.app/"
        github="https://github.com/Ari-F90/MovieAPI"
      ></CardProject>
      <CardProject
        title="PASAPALABRA"
        image="../../img/pasapalabra.png"
        description="Word-based trivia game inspired by the popular TV show. Players are presented with a series of questions, each associated with a specific letter of the alphabet."
        stack="Javascript"
        link="https://pasapalabraaf.netlify.app/"
        github="https://github.com/Ari-F90/Pasapalabra-precourse-challenge"
      ></CardProject>
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
  padding-bottom: 10rem;
  padding-top: 3rem;
}

.projects-title {
  color: rgb(255, 255, 255);
  font-family: "Tektur", cursive;
  text-align: center;
  padding-top: 4rem;
  font-size: 3rem;
}

.list-container {
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, 90%);
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  padding-right: 5%;
  padding-left: 5%;
}
</style>
