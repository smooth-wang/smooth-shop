import Vue from "vue";
import VueRouter from "vue-router";
import MSite from "../views/MSite/MSite.vue"
import Order from "../views/Order/Order.vue"
import Search from "../views/Search/Search.vue"
import Login from "../views/Login/Login.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/msite",
    name: "MSite",
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */"../views/Profile/Profile.vue"),
    meta: {
      showFooter: true
    }
  },
  {
    path: "/",
    redirect: "/order"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
