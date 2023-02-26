<template>
  <div class="navbar-menu-account">
    <nav class="navbar container-navbar navbar-expand-lg navbar-light " >
      <div class="container-fluid ">

        <a class="navbar-brand" href="#">{{AppSettings.APP_NAME}}</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" >
              <RouterLink class="nav-link active" aria-current="page" :to="menu.HEADER.index.url">{{menu.HEADER.index.label}}</RouterLink>
            </li>

            <NavBarAccountDropdown />
            <NavBarReportsDropdown />


            <li class="nav-item">
              <RouterLink class="nav-link" :to="menu.HEADER.config.url">{{menu.HEADER.config.label}}</RouterLink>
            </li>


          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="digite a pesquisa" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Procurar</button>
          </form>
        </div>
      </div>
    </nav>
  </div>


  <!--  <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
  <!--    &lt;!&ndash; Container wrapper &ndash;&gt;-->
  <!--    <div class="container-fluid">-->
  <!--      &lt;!&ndash; Toggle button &ndash;&gt;-->
  <!--      <button-->
  <!--          class="navbar-toggler"-->
  <!--          type="button"-->
  <!--          data-mdb-toggle="collapse"-->
  <!--          data-mdb-target="#navbarLeftAlignExample"-->
  <!--          aria-controls="navbarLeftAlignExample"-->
  <!--          aria-expanded="false"-->
  <!--          aria-label="Toggle navigation"-->
  <!--      >-->
  <!--        <i class="fas fa-bars"></i>-->
  <!--      </button>-->

  <!--      &lt;!&ndash; Collapsible wrapper &ndash;&gt;-->
  <!--      <div class="collapse navbar-collapse" id="navbarLeftAlignExample">-->
  <!--        &lt;!&ndash; Left links &ndash;&gt;-->
  <!--        <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link active" aria-current="page" href="#">Home</a>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link" href="#">Link</a>-->
  <!--          </li>-->
  <!--          &lt;!&ndash; Navbar dropdown &ndash;&gt;-->
  <!--          <li class="nav-item dropdown">-->
  <!--            <a-->
  <!--                class="nav-link dropdown-toggle"-->
  <!--                href="#"-->
  <!--                id="navbarDropdown"-->
  <!--                role="button"-->
  <!--                data-mdb-toggle="dropdown"-->
  <!--                aria-expanded="false"-->
  <!--            >-->
  <!--              Dropdown-->
  <!--            </a>-->
  <!--            &lt;!&ndash; Dropdown menu &ndash;&gt;-->
  <!--            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" data-bs-toggle="dropdown" >-->
  <!--              <li>-->
  <!--                <a class="dropdown-item" href="#">Action</a>-->
  <!--              </li>-->
  <!--              <li>-->
  <!--                <a class="dropdown-item" href="#">Another action</a>-->
  <!--              </li>-->
  <!--              <li><hr class="dropdown-divider" /></li>-->
  <!--              <li>-->
  <!--                <a class="dropdown-item" href="#">Something else here</a>-->
  <!--              </li>-->
  <!--            </ul>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link disabled"-->
  <!--            >Disabled</a-->
  <!--            >-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--        &lt;!&ndash; Left links &ndash;&gt;-->
  <!--      </div>-->
  <!--      &lt;!&ndash; Collapsible wrapper &ndash;&gt;-->
  <!--    </div>-->
  <!--    &lt;!&ndash; Container wrapper &ndash;&gt;-->
  <!--  </nav>-->


  <!--  <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
  <!--    <div class="container-fluid navbar-menu-account">-->
  <!--      <a class="navbar-brand" href="#">Navbar</a>-->
  <!--      <button-->
  <!--          class="navbar-toggler"-->
  <!--          type="button"-->
  <!--          data-mdb-toggle="collapse"-->
  <!--          data-mdb-target="#navbarTogglerDemo02"-->
  <!--          aria-controls="navbarTogglerDemo02"-->
  <!--          aria-expanded="true"-->
  <!--          aria-label="Toggle navigation"-->
  <!--      >-->
  <!--        <i class="fas fa-bars"></i>-->
  <!--      </button>-->
  <!--      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">-->
  <!--        <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link active" aria-current="page" href="#">Home</a>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link" href="#">Link</a>-->
  <!--          </li>-->

  <!--        </ul>-->
  <!--        -->


  <!--        <form class="d-flex input-group w-auto">-->
  <!--          <input-->
  <!--              type="search"-->
  <!--              class="form-control"-->
  <!--              placeholder="Type query"-->
  <!--              aria-label="Search"-->
  <!--          />-->
  <!--          <button-->
  <!--              class="btn btn-outline-primary"-->
  <!--              type="button"-->
  <!--              data-mdb-ripple-color="dark"-->
  <!--          >-->
  <!--            Search-->
  <!--          </button>-->
  <!--        </form>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </nav>-->

</template>

<script>
import {AppSettings} from "@/util/Constants";
import {menu} from "@/util/menu/MenuList";
import NavBarAccountDropdown from "@/views/menu/nav/NavBarAccountDropdown.vue";
import NavBarReportsDropdown from "@/views/menu/nav/NavBarReportsDropdown.vue";

export default {
  name: "NavBar",
  components: {NavBarAccountDropdown: NavBarAccountDropdown, NavBarReportsDropdown},
  computed: {
    menu() {
      return menu
    },
    AppSettings() {
      return AppSettings
    }
  }
}
</script>

<style scoped>

</style>