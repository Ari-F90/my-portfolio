<template>
  <section id="home" class="home">
    <div>
      <NavMenu></NavMenu>
    </div>
    <div class="container">
      <div>
        <img
          class="image-home"
          src="https://media.giphy.com/media/PmAjqmm4beKervYzFr/giphy.gif"
          alt="Home office image"
        />
      </div>
      <div class="sub-container">
        <div class="hello">Hi there! I'm Ariadna</div>
        <div class="ocupation">Full-stack developer</div>
        <p class="description">
          Always learning and seeking collaborative opportunities to contribute
          and grow in web development
        </p>
        <div class="buttons">
          <a
            href="https://drive.google.com/file/d/1w8XTVjmkvkXA4MyeRM4WrwzRfwkrZ2yC/view?usp=sharing"
            ><button class="button">My resume</button></a
          >
          <a href="https://github.com/Ari-F90"
            ><img class="github" src="../../public/img/github.png"
          /></a>
          <a href="https://es.linkedin.com/in/ariadnafriasdiaz/"
            ><img class="linkedin" src="../../public/img/linkedin.png"
          /></a>
        </div>
      </div>
    </div>
    <div class="arrow-container">
      <a href="#home">
        <img class="arrow" alt="move-up arrow" src="../../public/img/up.png" />
        ></a
      >
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
.arrow-container {
  padding-right: 3rem;
}
.arrow {
  width: 3rem;
  display: block;
  position: fixed;
  bottom: 3rem;
  right: 91rem;
}
.home {
  background-color: rgba(157, 205, 205, 255);
  display: flex;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8rem;
  padding-right: 6rem;
  gap: 5rem;
}
.image-home {
  width: 30rem;
  height: auto;
  border-radius: 0.8rem;
}
.sub-container {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.hello {
  font-family: "Tektur", cursive;
  color: rgb(62, 10, 206);
  font-size: 2.5rem;
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
  color: rgb(62, 10, 206);
  background-color: rgba(157, 205, 205, 255);
  cursor: pointer;
  border: 3px solid rgb(62, 10, 206);
  font-family: "Tektur", cursive;
  font-size: 1.2rem;
  transition: 0.5s;
}
.button:hover {
  transform: scale(1.2);
  opacity: 0.5;
  transition: 0.5s;
  color: rgb(255, 255, 255);
  border: 3px solid rgb(255, 255, 255);
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

@media (max-width: 500px) {
  .container {
    flex-direction: column;
  }
}
</style>
