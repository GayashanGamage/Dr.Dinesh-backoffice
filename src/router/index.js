import ConfirmCode from "@/views/Confirm-code.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import Login from "@/views/Login.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import HomeComponent from "@/components/homeComponent.vue";
import Info from "@/components/Info.vue";
import AllClient from "@/components/All-client.vue";
import Booking from "@/components/Booking.vue";
import ClientRequest from "@/components/Client-request.vue";
import Timeslot from "@/components/Timeslot.vue";
import Approved from "@/components/Request/Approved.vue";
import Pending from "@/components/Request/Pending.vue";
import BookingDetails from "@/components/BookingDetails.vue";

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
      path: "/office",
      component: Home,
      redirect: "office/home",
      children: [
        {
          path: "home",
          component: HomeComponent,
        },
        {
          path: "info",
          component: Info,
        },
        {
          path: "booking",
          component: Booking,
          redirect: "/office/booking/all",
          children: [
            {
              path: ":type",
              component: BookingDetails,
            },
            {
              path: ":type",
              component: BookingDetails,
            },
            {
              path: ":type",
              component: BookingDetails,
            },
            {
              path: ":type",
              component: BookingDetails,
            },
            {
              path: ":type",
              component: BookingDetails,
            },
          ],
        },
        {
          path: "timeslot",
          component: Timeslot,
        },
        {
          path: "request",
          component: ClientRequest,
          redirect: "/office/request/approved",
          children: [
            {
              path: "approved",
              component: Approved,
            },
            {
              path: "pending",
              component: Pending,
            },
          ],
        },
        {
          path: "clients",
          component: AllClient,
        },
      ],
    },
  ],
});

export default router;
