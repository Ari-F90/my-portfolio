/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import TechStack from "../components/TechStack.vue";
import ProjectList from "../components/ProjectList.vue";
import ContactPage from "../components/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/tech", name: "TechStack", component: TechStack },
  { path: "/projects", name: "ProjectList", component: ProjectList },
  { path: "/contact", name: "ContactPage", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
