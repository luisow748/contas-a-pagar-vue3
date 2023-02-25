<template>
  <div class="header">

    <div class="d-flex flex-row">
      <div class="d-flex justify-content-start">
        <h3 class="">Contas a pagar</h3>
        <!--    <Logo />-->

<!--      <Title :msg="AppSettings.APP_NAME"/>-->
<!--      <nav class="menu-header-container">-->
      </div>
        <div class="d-flex justify-content-center">
          <RouterLink class="menu-header-item button-30" :to="menu.HEADER.index.url">{{ menu.HEADER.index.label }}</RouterLink>
          <RouterLink class="menu-header-item button-30" :to="menu.HEADER.contas.url">{{ menu.HEADER.contas.label }}</RouterLink>
          <RouterLink class="menu-header-item button-30" :to="menu.HEADER.parcelas.url">{{ menu.HEADER.parcelas.label }}</RouterLink>
          <RouterLink class="menu-header-item button-30" :to="menu.HEADER.config.url">{{ menu.HEADER.config.label }}</RouterLink>
<!--          <button class="button-30" role="button">Button 30</button>-->
        </div>

<!--      </nav>-->

    </div>

  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import {AppSettings} from "@/util/Constants";
import {menu} from "@/util/menu/MenuList";

export default {
  name: "HeaderView",
  computed: {
    menu() {
      return menu
    },
    AppSettings() {
      return AppSettings
    }
  },
  components: {Title: Title},
  methods: {}
}
</script>

<style scoped>

</style>