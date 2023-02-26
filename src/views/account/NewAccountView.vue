<template>

  <div class="wrapper landing-page">
    <div class="page-header page-header-small">
      <!--      <parallax class="page-header-image">-->
      <!--&lt;!&ndash;                style="background-image: url('img/bg26.jpg')"&ndash;&gt;-->
      <!--      -->
      <!--      </parallax>-->
      <div class="content-center">
        <h1 class="title">Contas a pagar</h1>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Nova conta</h2>
        <p class="description">Insira abaixo os campos da nova conta.</p>

        <form @submit.prevent="submitForm" id="formNew">
          <div class="row">
            <div class="col-sm-6 col-lg-6">

              Descrição:
              <input
                  class="input-lg"
                  placeholder=""
                  v-model="form.name"
                  >


            </div>
            <div class="col-sm-3 col-lg-3">
              Valor total:
              <input
                  class="input-lg"
                  placeholder="R$"
                  v-model="form.totalValue"
                 >

            </div>


            <div class="col-sm-3 col-lg-3">
              Qtde de parcelas:
              <input
                  class="input-lg"
                  placeholder=""
                  v-model="form.installmentQty"
                  >

            </div>

          </div>

          <div class="container content-center mt-4">
            <div class="send-button">

              <button type="submit" class="btn btn-primary rounded" size="lg" @click="submitForm">
                Salvar
              </button>
            </div>
          </div>
        </form>


      </div>

      <!--      <div v-for="reg in registers" v-bind:key="reg.id">-->
      <!--        {{reg.id}} - {{reg.name}} - Account ID: {{reg.totalValue}}-->
      <div v-if="register.id">
        Conta criada: Nº {{ register.id }} - Nome: {{ register.name }}
      </div>
      <!--      </div>-->

    </div>
  </div>

</template>

<script>
import AccountApi from '@/base/api/account-api'

export default {

  name: 'NewAccountView',
  bodyClass: 'landing-page',
  components: {
  },
  data() {
    return {
      form: {
        name: '',
        totalValue: '',
        installmentQty: null,
        installmentValue: ''
      },
      accounts: [],
      register: {},
      multiSelect: {
        value: '',
        options: [
          {
            value: "2",
            label: "Paris"
          },
          {
            value: "3",
            label: "Bucharest"
          },
          {
            value: "4",
            label: "Rome"
          },
          {
            value: "5",
            label: "New York"
          },
          {
            value: "6",
            label: "Miami"
          },
          {
            value: "7",
            label: "Piatra Neamt"
          },
          {
            value: "8",
            label: "Paris"
          },
          {
            value: "9",
            label: "Bucharest"
          },
          {
            value: "10",
            label: "Rome"
          },
          {
            value: "11",
            label: "New York"
          },
          {
            value: "12",
            label: "Miami"
          },
          {
            value: "13",
            label: "Piatra Neamt"
          },
          {
            value: "14",
            label: "Paris"
          },
          {
            value: "15",
            label: "Bucharest"
          },
          {
            value: "16",
            label: "Rome"
          },
          {
            value: "17",
            label: "New York"
          },
          {
            value: "18",
            label: "Miami"
          },
          {
            value: "19",
            label: "Piatra Neamt"
          },


        ]
      },
    }
  },
  mounted() {
    AccountApi.getAccounts().then(
        (acc) => {
          this.accounts = acc
        }
    )
  },
  methods: {
    submitForm() {
      AccountApi.saveRegister(this.form).then(
          (acc) => {
            this.register = acc
          }
      )
    }

  }
}
</script>

<style scoped>

</style>