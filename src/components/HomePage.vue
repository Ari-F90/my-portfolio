<template>
  <section class="home">
    <div>
      <NavMenu></NavMenu>
    </div>
    <div class="container">
      <div>
        <img
          class="image-home"
          src="https://media.giphy.com/media/PmAjqmm4beKervYzFr/giphy.gif"
        />
      </div>
      <div class="sub-container">
        <div class="hello">Hi there, I'm Ariadna</div>
        <div class="ocupation">Full-stack developer</div>
        <p class="description">
          Always learning and seeking collaborative opportunities to contribute
          and grow in web development.
        </p>
        <div class="buttons">
          <button class="button">My resume</button>
          <img class="github" src="../../img/github.png" />
          <img class="linkedin" src="../../public//img/linkedin.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import NavMenu from "./NavMenu.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    NavMenu,
  },
});
</script>

<style>
.home {
  background-color: rgba(157, 205, 205, 255);
  display: flex;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8rem;
  padding-right: 5rem;
  gap: 6rem;
}
.image-home {
  width: 30rem;
  height: auto;
  border-radius: 0.8rem;
}
.sub-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hello {
  font-family: "Space Mono", monospace;
  color: rgb(237, 2, 81);
  font-size: 3rem;
}

.ocupation {
  font-family: "Ysabeau Infant", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 2rem;
}
.description {
  font-family: "Ysabeau Infant", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
}
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;
}
.button {
  width: 8rem;
  height: 2.7rem;
  border-radius: 0.8rem;
  color: rgb(237, 2, 81);
  background-color: rgba(157, 205, 205, 255);
  cursor: pointer;
  border: 2px solid rgb(237, 2, 81);
  font-family: "Ysabeau Infant", sans-serif;
  font-size: 1.1rem;
  transition: 0.8s;
}
.button:hover {
  transform: scale(1.2);
  opacity: 0.5;
  transition: 0.5s;
}

.github {
  width: 3.5rem;
  cursor: pointer;
  transition: 0.5s;
}

.github:hover {
  transform: translateY(-0.5rem);
  transition: 0.5s;
  opacity: 0.5;
}
.linkedin {
  width: 3.5rem;
  cursor: pointer;
}
.linkedin:hover {
  transform: translateY(-0.8rem);
  transition: 0.5s;
  opacity: 0.5;
}
</style>
