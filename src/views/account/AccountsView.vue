<template>
  <main>
    <div class="main-container ">
      <h5 class="">Minhas contas:</h5>

      <div class="">

        <!--        <p class="category">Por mês:</p>-->
        <MonthsMenu
            @get-accounts-by-month="getAccountsByMonth"
            @refresh-account-list="refreshAccountList"/>

        <!--      <h3 class="">Registros:</h3>-->
        <div class="table-accounts shadow-lg bg-body rounded table-bordered">
          <table class="table table-dark table-striped ">
            <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Valor total</th>
              <th scope="col">Vencimento</th>
              <th scope="col">Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="acc in accounts" :key="acc.id">
              <th scope="row">{{ acc.id }}</th>
              <td v-if="acc.name"></td>
              <td v-else>Conta nº {{ acc.id }}</td>
              <td>{{ acc.totalValue }}</td>
              <td>{{ formatDate(acc) }}</td>
              <td>
                <button type="button" class="btn btn-outline-danger" size="sm" @click="deleteAccount(acc.id)">
                  Excluir
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>


    </div>

  </main>
</template>

<script>
import AccountApi from '@/base/api/account-api'
import MonthsMenu from "@/views/menu/MonthsMenu.vue";
import DateService from '@/base/services/date-service'
import MonthsCarousel from "@/views/menu/MonthsCarousel.vue";

export default {

  name: 'AccountsView',
  bodyClass: 'landing-page',
  components: {
    MonthsCarousel,
    MonthsMenu,
    DateService
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
      months: [],
      selectedMonth: 0,
    }
  },
  mounted() {
    this.refreshAccountList()
    this.getMonths()
  },
  methods: {
    refreshAccountList() {
      this.getMonths()
      console.log("Refresh")
      this.selectedMonth = 13
      AccountApi.getAccounts().then(
          (acc) => {
            this.accounts = acc
            console.log(acc)
          }
      )
    },
    formatDate(account) {
      return DateService.formatDate(account)
    },
    deleteAccount(id) {
      AccountApi.deleteRegister(id)
          .finally(() => this.refreshAccountList())
    },
    getMonths() {
      this.months = DateService.getMonths()
    },
    getAccountsByMonth(monthId) {
      this.getMonths()
      console.log("getByMopnth")
      console.log(this.selectedMonth)
      console.log(monthId)
      console.log(this.months)
      if (this.selectedMonth > 0 && this.selectedMonth < 13) {
        this.months[this.selectedMonth].selected = false
      }
      this.months[--monthId].selected = true
      this.selectedMonth = --monthId
      AccountApi.getAccountsByMonth(monthId).then(
          (acc) => {
            this.accounts = acc
            console.log(this.months)
          }
      )
    }
  }
}
</script>