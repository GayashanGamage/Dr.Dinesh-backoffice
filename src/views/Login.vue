<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <div class="level-three-container">
        <h2 class="log-heading heading-title">BACK OFFICE</h2>
      </div>
      <div class="level-three-container">
        <input
          type="text"
          placeholder="user name"
          class="user-input"
          v-model="Username"
        />
        <input
          type="password"
          placeholder="Password"
          class="user-input"
          v-model="Password"
        />
      </div>
      <div class="level-three-container">
        <button class="action-button login-button" @click="login">Login</button>
        <p class="action-button forget-password" @click="forgetPassword">
          Forget password ?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import axios, { all } from "axios";
import { onBeforeMount, ref } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
name: "Login";

const toast = useToast();

const Username = ref(null);
const Password = ref(null);

const login = () => {
  if (Username.value === null || Username.value === "") {
    toast.info("Fill Username filed");
  } else if (Password.value === null || Password.value === "") {
    toast.info("Fill Password filed");
  } else {
    axios
      .post(`${import.meta.env.VITE_site}/admin-login`, {
        username: Username.value,
        password: Password.value,
      })
      .then(function (response) {
        if (response.status === 200) {
          localStorage.setItem("username", Username.value);
          document.cookie = "admin =" + response.data.token + "; path=/;";
          router.replace("/office");
        }
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          toast.error("Details Not Mached");
        } else if (error.response.status === 404) {
          toast.error("Invalied Username");
        }
      });
  }
};

const forgetPassword = () => {
  router.push("/foget-password");
};

// #TODO: find correctness of this fuction
onBeforeMount(function () {
  let token = ref(null);
  let UserName = localStorage.getItem("username");

  const allCookies = document.cookie.split("; ");
  for (let i = 0; i < allCookies.length; i++) {
    const selectedCookie = allCookies[i].split("=");
    if (selectedCookie[0] === "admin") {
      token = selectedCookie[1];
    }
  }
  if (token != null && UserName != null) {
    axios
      .post(
        `${import.meta.env.VITE_site}/admin-auth`,
        {
          username: UserName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          router.replace("/office");
        }
      })
      .catch(function (error) {
        if (error.status === 401) {
          localStorage.removeItem("username");
        }
      });
  }
});
</script>

<style scoped>
.level-one-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.level-two-container {
  border: 1px solid black;
  height: auto;
  width: auto;
  border-radius: 4px;
  background-color: #ffffff;
  border: 0px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.level-three-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
}
.heading-title {
  font-size: 2.4rem;
  margin: 3rem 11.2rem;
  font-weight: 900;
}
.heading-sub-title {
  margin-top: 0px;
  font-size: 2.4rem;
}
.user-input {
  height: 3.8rem;
  width: 27.4rem;
  border-radius: 4px;
  font-size: 1.8rem;
  margin-bottom: 18px;
  outline: none;
  border: 1px solid #d9d9d9;
  padding-left: 22px;
}
.user-input::placeholder {
  color: #aaa5a5;
}
.login-button {
  border: 1px solid black;
  width: 29.8rem;
  height: 3.8rem;
  border-radius: 4px;
  border: 0px;
  font-size: 1.8rem;
  font-weight: 400;
  background-color: #595ff3;
  color: #ffffff;
}
.login-button:hover {
  color: #595ff3;
  background-color: #ffffff;
  border: 0.2rem solid #595ff3;
}
.forget-password {
  text-align: right;
  width: 29.8rem;
  font-size: 1.5rem;
  color: #bdbdbd;
  margin-bottom: 3rem;
}
.forget-password:hover {
  color: #000000;
}
</style>
