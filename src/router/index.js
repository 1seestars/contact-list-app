import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Contacts",
      component: () => import("../views/Contacts"),
    },
    {
      path: "/:id",
      name: "ContactInfo",
      component: () => import("../views/ContactInfo"),
    },
  ],
});
