import Vue from "vue";
import VueRouter from "vue-router";
import UserList from "../views/UserList.vue";
import { auth as store } from "../store/auth.module";
import Login from "../views/Login";
import DevicesList from "../views/DevicesList";
import SensorsList from "../views/SensorsList";
import ClientList from "../views/ClientList";
import ClientListSensors from "../views/ClientListSensors";
import ValuesList from "../views/ValuesList"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/users",
    name: "Users",
    component: UserList,
    beforeEnter: (to, from, next) => {
      if (store.state.status.loggedIn && store.state.user.roles.includes("ADMIN")) {
        next();
      } else {
        next({ name: "Devices" });
      }
    },
  },
  {
    path: "/devices",
    name: "devices",
    component: DevicesList,
    beforeEnter: (to, from, next) => {
      if (store.state.status.loggedIn && store.state.user.roles.includes("ADMIN")) {
        next();
      } else {
        next({ name: "Bookings" });
      }
    },
  },
  {
    path: "/sensors",
    name: "Sensors",
    component: SensorsList,
    beforeEnter: (to, from, next) => {
      if (store.state.status.loggedIn && store.state.user.roles.includes("ADMIN")) {
        next();
      } else {
        next({ name: "Bookings" });
      }
    },
  },  
  {
    path: "/devices/client",
    name: "Client",
    component: ClientList,
    beforeEnter: (to, from, next) => {
      if (store.state.status.loggedIn && store.state.user.roles.includes("CLIENT") ) {
        next();
      } else {
        next({ name: "Client" });
      }
    },
  },
  {
    path: "/sensors/client",
    name: "Client",
    component: ClientListSensors,
    beforeEnter: (to, from, next) => {
      if (store.state.status.loggedIn && store.state.user.roles.includes("CLIENT") ) {
        next();
      } else {
        next({ name: "Client" });
      }
    },
  },
  {
    path: "/sensors/client/values",
    name: "Client",
    component: ValuesList,
    beforeEnter: (to, from, next) => {
      if (store.state.status.loggedIn && store.state.user.roles.includes("CLIENT") ) {
        next();
      } else {
        next({ name: "Client" });
      }
    },
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
