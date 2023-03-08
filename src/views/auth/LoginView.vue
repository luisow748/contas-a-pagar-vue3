<template>
  <main>
    <div class="main-container ">
      <h5 class="">Login</h5>

      <div class="submit-form">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="email">E-mail</label>
            <input
                type="text"
                class="form-control"
                id="email"
                required
                v-model="userDetails.email"
                name="email"
            />
          </div>

          <div class="form-group">
            <label for="description">Senha</label>
            <input
                type="password"
                class="form-control"
                id="senha"
                required
                v-model="userDetails.password"
                name="senha"
            />
          </div>

          <button @click="authenticate" class="btn btn-success">Enviar</button>
        </div>


        <div v-else>
          <h4>Logado com sucesso ?</h4>
<!--          <button class="btn btn-success" @click="newTutorial">Add</button>-->
        </div>
      </div>
      <div v-if="this.authenticationStatus" class="col-md-6">
<!--        <h2 class="w-100"> {{ this.authenticationStatus }}</h2>-->
      </div>


    </div>
  </main>
</template>

<script lang="ts">
import type UserDetails from "@/base/types/UserDetails";
import {defineComponent} from "vue";
import Login from "@/base/api/Login";
import type ResponseData from "@/base/types/ResponseData";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      userDetails: {
        email: "",
        password: "",
      } as UserDetails,
      submitted:false,
      authenticationStatus: "",
    };
  },
  methods: {
    authenticate() {
      let userDetails = {
        email: this.userDetails.email,
        password: this.userDetails.password,
      };
      Login.authenticate(userDetails)
          .then((response: ResponseData) => {
            console.log(response.data.token);
            this.$cookie.setCookie("access_token", response.data.token)
          }).catch((e: Error) => {
            console.log(e + " assasa");
        this.authenticationStatus = e.name + e.message;
      })
    }
  }
});
</script>

<style scoped>

</style>