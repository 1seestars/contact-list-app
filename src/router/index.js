import Vue from "vue";
import Router from "vue-router";
import Contacts from "@/views/Contacts";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Contacts",
      component: Contacts,
    },
    {
      path: "/:id",
      name: "ContactInfo",
      component: () => import("../views/ContactInfo"),
      props: true,
    },
  ],
});
