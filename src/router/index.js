/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import TechStack from "../components/TechStack.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/tech", name: "TechStack", component: TechStack },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
