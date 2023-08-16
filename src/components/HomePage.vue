<template>
  <section id="home" class="home">
    <div>
      <NavMenu></NavMenu>

      <div class="navigation">
        <input type="checkbox" class="toggle-menu" />
        <div class="burger">
          <ul class="burger-ul">
            <li class="burger-li"><a href="#home">Home</a></li>
            <li class="burger-li"><a href="#about">About</a></li>
            <li class="burger-li"><a href="#tech">Tech stack</a></li>
            <li class="burger-li"><a href="#projects">Projects</a></li>
            <li class="burger-li"><a href="#contact">Contact</a></li>
            <router-view />
          </ul>
        </div>
      </div>
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
            href="https://drive.google.com/file/d/1tLCxey7QPy0lTUcAeALkWzgvbz6j0MD1/view?usp=sharing"
            ><button class="button-resume">My resume</button></a
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
      </a>
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
  padding-right: 2.5%;
}
.arrow {
  width: 3rem;
  display: block;
  position: fixed;
  right: 4%;
  bottom: 6%;
}

.burger,
.toggle-menu {
  display: none;
}
.home {
  background-color: rgba(157, 205, 205, 255);
  display: flex;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;
  padding-left: 5%;
  padding-right: 5%;
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
  align-items: flex-start;
  padding-left: 5%;
  padding-right: 5%;
}

.hello {
  font-family: "Tektur", cursive;
  color: rgb(62, 10, 206);
  font-size: 2rem;
}

.ocupation {
  font-family: "Ysabeau Infant", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 1.8rem;
}
.description {
  font-family: "Ysabeau Infant", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}
.button-resume {
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
.button-resume:hover {
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

@media (max-width: 1300px) {
  .container {
    gap: 3rem;
  }
}
@media (max-width: 1200px) {
  .image-home {
    width: 20rem;
  }
  .container {
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 950px) {
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
  .sub-container {
    align-items: center;
    justify-content: center;
  }
  .description {
    text-align: center;
  }
}
@media (max-width: 600px) {
  .container {
    padding: 7.5rem 0;
  }
  .sub-container {
    margin-left: 1.5rem;
    margin-right: 1rem;
  }
  .image-home {
    width: 15rem;
    justify-self: center;
  }
  .buttons {
    gap: 2rem;
    align-self: center;
    padding-top: 0.8rem;
  }
  .button-resume {
    width: 7rem;
    height: 3rem;
    font-size: 1rem;
    padding: 0.5rem;
  }

  .hello {
    text-align: center;
  }
  .ocupation {
    text-align: center;
    font-size: 1.5rem;
  }
  .description {
    text-align: center;
    font-size: 1.3rem;
  }
  .arrow-container {
    padding-right: 1.5%;
    padding-left: 1.5%;
  }
  .arrow {
    width: 2.5rem;
  }

  .burger,
  .toggle-menu {
    display: block;
  }

  .burger {
    position: fixed;
    width: 2rem;
    height: 0.25rem;
    background-color: rgb(255, 255, 255);
    border-radius: 0.6rem;
    cursor: pointer;
    z-index: 2;
    transition: 0.8s;
    margin-top: 3rem;
    margin-left: 1.5rem;
  }
  .burger:before,
  .burger:after {
    content: "";
    position: fixed;
    height: 0.25rem;
    right: 50;
    background: rgb(255, 255, 255);
    border-radius: 0.6rem;
    transition: 0.8s;
    z-index: 2;
  }
  .burger:before {
    margin-top: 3rem;
    top: -0.6rem;
    width: 2rem;
    z-index: 2;
  }
  .burger:after {
    margin-top: 3rem;
    top: 0.6rem;
    width: 2rem;
    z-index: 2;
  }
  .toggle-menu {
    position: fixed;
    width: 10rem;
    height: 4rem;
    z-index: 3;
    cursor: pointer;
    opacity: 0;
  }

  .navigation input:checked ~ .burger {
    background: transparent;
    position: fixed;
  }
  .navigation input:checked ~ .burger:before {
    top: 0;
    transform: rotate(-45deg);
    width: 1.8rem;
    z-index: 2;
  }
  .navigation input:checked ~ .burger:after {
    top: 0;
    transform: rotate(45deg);
    width: 1.8rem;
    z-index: 2;
  }

  .burger-ul {
    padding: 7.5rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 1;
    gap: 2rem;
    font-size: 1.4rem;
    font-family: "Tektur", cursive;
    list-style: none;
    text-decoration: none;
    height: 100%;
    width: 15rem;
    background-color: rgb(156, 144, 144);
    left: -99rem;
    transition: 2s;
    top: 0;
    position: fixed;
  }

  .burger-li {
    width: 100%;
  }

  .navigation input:checked ~ .burger ul {
    left: 0;
    transition: 0.8s;
  }
  .nav {
    width: 0rem;
  }
  .burger li a:hover {
    box-shadow: 0 -0.1rem 0 rgb(62, 10, 206) inset,
      20rem 0 0 rgb(156, 144, 144) inset;
  }
}
</style>
