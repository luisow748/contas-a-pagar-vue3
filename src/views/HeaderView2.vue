<template>
  <div class="header ">

<!--    <div class="d-flex flex-row">-->
<!--      <div class="d-flex justify-content-start">-->
<!--        <h3 class="title">{{AppSettings.APP_NAME}}</h3>-->
<!--      </div>-->
<!--&lt;!&ndash;      class="d-flex justify-content-center"&ndash;&gt;-->
<!--      <div class="menu-header-container">-->
<!--        <RouterLink class="menu-header-item button-30" :to="menu.HEADER.index.url">{{-->
<!--            menu.HEADER.index.label-->
<!--          }}-->
<!--        </RouterLink>-->
<!--        <RouterLink class="menu-header-item button-30" :to="menu.HEADER.contas.url">{{-->
<!--            menu.HEADER.contas.label-->
<!--          }}-->
<!--        </RouterLink>-->
<!--        <RouterLink class="menu-header-item button-30" :to="menu.HEADER.parcelas.url">{{-->
<!--            menu.HEADER.parcelas.label-->
<!--          }}-->
<!--        </RouterLink>-->
<!--        <RouterLink class="menu-header-item button-30" :to="menu.HEADER.config.url">{{-->
<!--            menu.HEADER.config.label-->
<!--          }}-->
<!--        </RouterLink>-->
<!--        &lt;!&ndash;          <button class="button-30" role="button">Button 30</button>&ndash;&gt;-->
<!--      </div>-->

<!--      &lt;!&ndash;      </nav>&ndash;&gt;-->

<!--    </div>-->


   <NavBar />

  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import {AppSettings} from "@/util/Constants";
import {menu} from "@/util/menu/MenuList";
import NavBar from "@/views/menu/nav/NavBar.vue";

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
  components: {NavBar, Title: Title},
  methods: {}
}
</script>

<style scoped>

</style>