<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

    <div class="wrapper">
      <Title :msg="AppSettings.APP_NAME" />

      <nav>
        <RouterLink :to="menu.HEADER.index.url">{{menu.HEADER.index.label}}</RouterLink>
        <RouterLink :to="menu.HEADER.contas.url">{{menu.HEADER.contas.label}}</RouterLink>
      </nav>
    </div>
  </header>
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
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: start;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    margin-top: 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>