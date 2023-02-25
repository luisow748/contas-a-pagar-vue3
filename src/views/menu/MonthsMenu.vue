<template>
  <div class="d-flex justify-content-center">
    <!--    <div class="col-md-12 col-sm-6">-->
    <!--    <div class="container">-->
    <div class="me-4">
      <!--      <div class="col-4">-->
      <button type="button" :class="this.selectedMonth===13 ? 'btn btn-success': 'btn btn-secondary'"
              @click="$emit('refreshAccountList')">Todos
      </button>
      <!--      </div>-->
    </div>
    <div>
      <!--      <div class="col-12 justify-content-center">-->
      <!--        <component  component="" class="p-1">-->
      <button v-for="m in months" type="button" :class="m.selected ? 'btn btn-success': 'btn btn-secondary'"
              @click="$emit('getAccountsByMonth', m.id)">{{ m.month }}
      </button>
      <!--        </component>-->
    </div>
    <!--    </div>-->
  </div>
  <!--  </div>-->
  <!--  </div>-->

</template>

<script>

import DateService from '@/base/services/date-service'

export default {

  name: 'MonthsMenu',
  bodyClass: 'landing-page',
  components: {
    DateService
  },
  data() {
    return {
      months: [],
      selectedMonth: 0,
    }
  },
  mounted() {
    this.getMonths()
  },
  methods: {

    getMonths() {
      this.months = DateService.getMonths()
    },
  }
}
</script>