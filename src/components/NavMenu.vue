<template>
  <nav class="nav">
    <div class="container-home-link">
      <img class="home-link" src="../../favicon.png" />
    </div>
    <ul class="nav-list">
      <li class="item-list">Home</li>
      <li class="item-list">About</li>
      <li class="item-list">Tech stack</li>
      <li class="item-list">Projects</li>
      <ul class="projects-list">
        <li class="full-stack item-list">Full-stack projects</li>
        <li class="front-end item-list">Front-end projects</li>
      </ul>
      <li class="item-list">Contact</li>
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
  width: 3.5rem;
  margin-top: 2rem;
  justify-content: center;
  cursor: pointer;
}
.nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 10rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-family: "Space Mono", monospace;
  font-size: 1.4rem;
  gap: 1.8rem;
}

.item-list:hover {
  text-decoration: underline;
  transform: scale(1.1);
}
.home-list {
  width: 2.5rem;
}

.projects-list {
  display: none;
}
.projects-list:hover {
  display: flex;
  flex-direction: column;
}
</style>
