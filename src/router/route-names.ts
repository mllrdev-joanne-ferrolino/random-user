import { createApp } from "vue";
import App from "../App.vue";
import { Vue } from "vue-class-component";

export enum RouteNames {
  USERS = "Users Page",
  PROFILE = "Profile Page",
}

createApp(App).provide("$routeNames", RouteNames);

// declare module '*.vue'{

// }
