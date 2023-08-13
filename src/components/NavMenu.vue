<template>
  <nav class="nav">
    <div class="container-home-link">
      <img
        class="home-link"
        src="https://media.giphy.com/media/RsZ3PEHTxJp9zjTZ0C/giphy.gif"
        alt="Status 200 image"
      />
    </div>
    <ul class="nav-list">
      <li class="item-list"><a href="#home">Home</a></li>
      <li class="item-list"><a href="#about">About</a></li>
      <li class="item-list"><a href="#tech">Tech stack</a></li>
      <li class="projects-list-li">Projects</li>
      <ul class="projects-list">
        <li class="full-stack">Full-stack projects</li>
        <li class="front-end">Front-end projects</li>
      </ul>
      <li class="item-list"><a href="#contact">Contact</a></li>
      <router-view />
    </ul>
  </nav>
</template>

<style>
.nav {
  background-color: rgb(156, 144, 144);
  width: 15rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-link {
  width: 10rem;
  margin-top: 2rem;
  justify-content: center;
  cursor: pointer;
}

.nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 5rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-family: "Tektur", cursive;
  font-size: 1.4rem;
  gap: 3.5rem;
}
.projects-list {
  display: none;
  position: absolute;
}

li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.item-list {
  transition: 0.5s;
}

.projects-list-li:hover {
  border-bottom: 2px solid rgb(62, 10, 206);
  transform: scale(1.2);
  transition: 0.5s;
  color: rgb(62, 10, 206);
  transition: 0.5s;
}

li a:hover {
  border-bottom: 2px solid rgb(62, 10, 206);
  transform: scale(1.2);
  transition: 0.5s;
  color: rgb(62, 10, 206);
  transition: 0.5s;
}
.item-list:hover {
  border-bottom: 2px solid rgb(62, 10, 206);
  transform: scale(1.2);
  transition: 0.5s;
  color: rgb(62, 10, 206);
}

.home-list {
  width: 2.5rem;
}

@media (max-width: 500px) {
  .nav {
    width: 8rem;
  }
}
</style>
