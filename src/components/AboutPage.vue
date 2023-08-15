<template>
  <section id="about" class="about">
    <h1 class="about-title">Hey, let's talk a bit about me!</h1>
    <div class="my-desc">
      <p class="first-p">
        After almost 9 years in the markets and financial sector, I came across
        with the programming world. <br />In 2023, I finished the
        <span class="strong">ISDI Coders</span> (2021 World's best coding
        bootcamp) course
        <span class="strong">"Full-stack web development program".</span>
        <br />My goal is to continue learning and improving my skills while
        contributing to meaningful projects that can make a difference, while
        exploring
        <span class="strong">new challenges and opportunities</span> in this
        field.
      </p>
    </div>
    <div class="container-about">
      <div class="skills">
        <span class="skills-title">SOFT SKILLS </span>
        <div class="skills-icon">
          <img
            src="../../public/img/teamplayer.png"
            alt="teamplayer"
            class="icon"
          />
          <img src="../../public/img/time.png" alt="time" class="icon" />
          <img
            src="../../public/img/solution.png"
            alt="solution"
            class="icon"
          />
          <img
            src="../../public/img/communication.png"
            alt="communication"
            class="icon"
          />
          <img
            src="../../public/img/adapt.png"
            alt="adpatablity"
            class="icon"
          />
        </div>
      </div>
      <div class="hobbies">
        <span class="hobbies-title">HOBBIES</span>
        <div class="hobbies-icon">
          <img src="../../public/img/coding.png" alt="coding" class="icon" />
          <img src="../../public/img/music.png" alt="music" class="icon" />
          <img src="../../public/img/sport.png" alt="sport" class="icon" />
          <img src="../../public/img/travel.png" alt="travel" class="icon" />
          <img src="../../public/img/read.png" alt="read" class="icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
});
</script>

<style>
.about {
  background-color: rgba(157, 205, 205, 255);
  min-height: 100vh;
  padding-left: 6rem;
  padding-right: 5rem;
  padding-top: 3rem;
  padding-bottom: 6rem;
}

.about-title {
  color: rgb(62, 10, 206);
  font-family: "Tektur", cursive;
  text-align: center;
  padding-top: 4rem;
  font-size: 3rem;
}

.my-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: rgb(255, 255, 255);
  padding-top: 4rem;
}
.first-p {
  font-family: "Ysabeau Infant", sans-serif;
  font-size: 1.5rem;
}

.strong {
  font-style: italic;
}

.container-about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 6rem;
}
.skills {
  display: flex;
  padding-top: 4.5rem;
  color: rgb(255, 255, 255);
  font-family: "Ysabeau Infant", sans-serif;
  font-size: 1.2rem;
  gap: 4rem;
}
.skills-title {
  align-self: center;
  border-bottom: 2px solid rgb(255, 255, 255);
}
.skills-icon {
  display: flex;
  gap: 6rem;
}

.icon {
  width: 4.5rem;
  cursor: pointer;
  transition: 0.7s;
}
.icon:hover {
  transform: scale(1.3);
  opacity: 0.5;
  transition: 0.7s;
}

.hobbies {
  display: flex;
  padding-top: 4.5rem;
  color: rgb(255, 255, 255);
  font-family: "Ysabeau Infant", sans-serif;
  font-size: 1.2rem;
  gap: 6rem;
}
.hobbies-title {
  align-self: center;
  border-bottom: 2px solid rgb(255, 255, 255);
}
.hobbies-icon {
  display: flex;
  gap: 6rem;
}

@media (max-width: 1100px) {
  .about {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .container-about {
    flex-direction: row;
    justify-content: space-around;
    gap: 4rem;
  }
  .skills {
    flex-direction: column;
  }

  .skills-title {
    font-size: 1rem;
  }
  .skills-icon {
    flex-direction: column;
    gap: 2rem;
  }

  .icon {
    width: 4rem;
  }
  .hobbies {
    flex-direction: column;
    gap: 4rem;
  }
  .hobbies-title {
    font-size: 1rem;
  }
  .hobbies-icon {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
