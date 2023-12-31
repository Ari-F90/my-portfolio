<template>
  <section class="card">
    <div class="card-container">
      <div class="card-title">{{ title }}</div>
      <div class="image-desc">
        <div class="image-buttons">
          <div>
            <img class="card-image" v-bind:src="image" v-bind:alt="title" />
          </div>
          <div class="buttons">
            <a :href="render" target="_blank"
              ><button v-if="render" class="button-link">
                Start the server
              </button></a
            >
            <a :href="link"
              ><button class="button-link">Project link</button></a
            >
            <a :href="github"
              ><button class="button-link">View the repository</button></a
            >
          </div>
        </div>

        <div class="card-text">
          <div class="card-desc">{{ description }}</div>
          <div class="div-stack">
            <div class="card-stack">{{ front }}</div>
            <div v-if="back" class="card-stack">{{ back }}</div>
            <div v-if="test" class="card-stack">{{ test }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardProject",
  props: [
    "title",
    "front",
    "back",
    "test",
    "image",
    "description",
    "link",
    "github",
    "render",
  ],
});
</script>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}
.card-title {
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-family: "Ysabeau Infant", sans-serif;
  border-bottom: 2px solid rgb(255, 255, 255);
}

.image-desc {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
}

.image-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
}
.buttons {
  display: flex;
  justify-content: space-around;
}

.button-link {
  width: 10rem;
  height: 3.5rem;
  border-radius: 0.8rem;
  color: rgb(62, 10, 206);
  background-color: rgba(157, 205, 205, 255);
  cursor: pointer;
  border: 3px solid rgb(62, 10, 206);
  font-family: "Tektur", cursive;
  font-size: 1.2rem;
  transition: 0.5s;
}
.button-link:hover {
  transform: scale(1.2);
  opacity: 0.5;
  transition: 0.5s;
  color: rgb(255, 255, 255);
  border: 3px solid rgb(255, 255, 255);
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  font-family: "Ysabeau Infant", sans-serif;
}

.card-image {
  width: 40rem;
  object-fit: cover;
  cursor: pointer;
  transition: 0.7s;
}

.card-image:hover {
  transform: scale(1.1);
  transition: 0.7s;
}

.div-stack {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.card-stack {
  font-family: "Tektur", cursive;
  font-size: 1rem;
  color: rgb(62, 10, 206);
}

@media (max-width: 1100px) {
  .image-desc {
    flex-direction: column;
  }
  .card-image {
    width: 30rem;
    object-fit: contain;
    align-self: center;
  }
}
@media (max-width: 700px) {
  .buttons {
    gap: 2rem;
  }
  .button-link {
    width: 8rem;
    height: 3.5rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 500px) {
  .card-image {
    object-fit: contain;
    align-self: center;
  }

  .buttons {
    gap: 0.8rem;
  }
  .button-link {
    width: 6rem;
    height: 2.8rem;
    font-size: 0.9rem;
  }
  .card-text {
    font-size: 1.1rem;
  }
  .card-stack {
    font-size: 0.8rem;
  }
  .card-image {
    width: 20rem;
    transition: 0.7s;
  }
  .card-title {
    font-size: 1.5rem;
  }
  .card-image:hover {
    transform: scale(1.1);
    transition: 0.7s;
  }
}
</style>
