import Backoffice from "@/views/Backoffice.vue";
import ConfirmCode from "@/views/Confirm-code.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import Login from "@/views/Login.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import { createRouter, createWebHistory } from "vue-router";

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
      path: "/backoffice",
      component: Backoffice,
      name: "backoffice",
    },
  ],
});

export default router;
