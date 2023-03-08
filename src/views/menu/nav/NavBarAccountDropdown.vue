<template>
  <li class="nav-item dropdown" data-bs-auto-close="true">
    <RouterLink class="nav-link dropdown-toggle" :to="menu.HEADER.account.url" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" data-bs-auto-close="true">
      {{ menu.HEADER.account.label }}
    </RouterLink>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown" data-bs-auto-close="true">
      <li>
        <RouterLink class="dropdown-item" data-bs-auto-close="true" :to="menu.HEADER.account.url">
          {{ menu.HEADER.account.label }}
        </RouterLink>
      </li>
      <li>
        <RouterLink class="dropdown-item" data-bs-auto-close="true" :to="menu.HEADER.newaccount.url">
          {{ menu.HEADER.newaccount.label }}
        </RouterLink>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li>
        <RouterLink class="dropdown-item" data-bs-auto-close="true" :to="menu.HEADER.editaccount.url">{{
            menu.HEADER.editaccount.label
          }}
        </RouterLink>
      </li>
    </ul>
  </li>
</template>

<script>
import {menu} from "@/util/menu/MenuList";

export default {
  name: "NavBarDropdown",
  computed: {
    menu() {
      return menu
    }
  }
}
</script>

<style scoped>

</style>