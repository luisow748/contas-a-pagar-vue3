<template>
  <div class="header">

    <div>
      <Title :msg="AppSettings.APP_NAME"/>
      <nav>
        <RouterLink :to="menu.HEADER.index.url">{{ menu.HEADER.index.label }}</RouterLink>
        <RouterLink :to="menu.HEADER.contas.url">{{ menu.HEADER.contas.label }}</RouterLink>
      </nav>
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