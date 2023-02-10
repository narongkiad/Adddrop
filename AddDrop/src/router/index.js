import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsPage from "../views/NewsPage.vue";
import SubjectList from "../views/SubjectList.vue";
import AddDrop from "../views/AddDrop.vue";
import ShowList from "../views/showList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/np",
      name: "np",
      component: NewsPage,
    },
    {
      path: "/sl",
      name: "sl",
      component: SubjectList,
    },
    {
      path: "/ad",
      name: "ad",
      component: AddDrop,
    },
    {
      path: "/Showl",
      name: "Showl",
      component: ShowList
    }
  ],
});

export default router;
