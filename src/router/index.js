import ConfirmCode from "@/views/Confirm-code.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import Login from "@/views/Login.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import HomeComponent from "@/components/homeComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Login,
      name: "login",
    },
    {
      path: "/foget-password",
      component: ForgetPassword,
      name: "forgetPassword",
    },
    {
      path: "/confirm-code",
      component: ConfirmCode,
      name: "confirmCode",
    },
    {
      path: "/resetpassword",
      component: ResetPassword,
      name: "resetPassword",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
    },
  ],
});

export default router;
