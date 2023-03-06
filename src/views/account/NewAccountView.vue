<template>

  <div class="main-container">


    <form @submit.prevent="submitForm" id="formNew" class="form-newaccount row g-3 ">
      <h2 class="">Nova conta</h2>
      <p class="description">Insira abaixo os campos da nova conta.</p>
      <div class="col-12">
        <label for="floatingInputValue">Descrição</label>
        <input
            class="form-control "
            placeholder="Descrição"
            v-model="form.name"
            id="floatingInputValue"
        >


      </div>
      <div class="col-md-3">
        Valor total:
        <input
            class="form-control"
            placeholder="R$"
            v-model="form.totalValue"
        >
      </div>

      <div class="col-md-2">
        Qtde de parcelas:
        <input
            class="form-control"
            placeholder=""
            v-model="form.installmentQty"
        >
      </div>
      <div class="col-md-2">
        Qtde de parcelas:
        <input
            class="form-control"
            placeholder=""
            v-model="form.installmentQty"
        >
      </div>


    </form>

    <button type="submit" class="btn send-button" size="lg" @click="submitForm">
      Salvar
    </button>
    <div v-if="register.id">
      Conta criada: Nº {{ register.id }} - Nome: {{ register.name }}
    </div>
    <div v-if="result" class="text-danger">
      Não foi possível gravar as informações.
      <div>{{ this.resultMessage.message }}</div>
      <div>{{ this.resultMessage.code }}</div>
      <div>{{ this.resultMessage.name }}</div>
      <div>{{ this.resultMessage.request }}</div>
      <div>{{ this.resultMessage.config }}</div>

    </div>

  </div>


</template>

<script>
import AccountApi from '@/base/api/account-api'
import router from "@/router";

export default {

  name: 'NewAccountView',
  bodyClass: 'landing-page',
  components: {},
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
      result: false,
      resultMessage: {},
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
            router.push('/account')
          }
      ).catch((err) => {
            console.log(err)
            this.result = true
            this.resultMessage = err
          }
      ).finally(() => {
        this.result = true
        // this.resultMessage = err.response
      })
    }

  }
}
</script>

<style scoped>

</style>