<template>

  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="false">

        <MonthsMenu />
        <div class="carousel-caption d-none d-md-block">
          <h5>2021</h5>
        </div>

      </div>
      <div class="carousel-item" data-bs-interval="false">

        <MonthsMenu />
        <div class="carousel-caption d-none d-md-block">
          <h5>2021</h5>
        </div>

      </div>
      <div class="carousel-item" data-bs-interval="false">

        <MonthsMenu />
        <div class="carousel-caption d-none d-md-block">
          <h5>20213 </h5>
        </div>

      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


<!--  <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">-->
<!--    <div class="carousel-inner">-->
<!--      <div class="carousel-item active" data-bs-interval="false">-->
<!--        <MonthsMenu v-bind:year="2021"/>-->
<!--        <div class="carousel-caption d-none d-md-block">-->
<!--          <h5>2021</h5>-->
<!--        </div>-->
<!--        <div class="carousel-item" data-bs-interval="false">-->
<!--          <MonthsMenu v-bind:year="2022"/>-->
<!--          <div class="carousel-caption d-none d-md-block">-->
<!--            <h5>2022</h5>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="carousel-item" data-bs-interval="false">-->
<!--          <MonthsMenu v-bind:year="2023"/>-->
<!--          <div class="carousel-caption d-none d-md-block">-->
<!--            <h5>20213 </h5>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">-->
<!--        <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--        <span class="visually-hidden">Previous</span>-->
<!--      </button>-->
<!--      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">-->
<!--        <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--        <span class="visually-hidden">Next</span>-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import MonthsMenu from "@/views/menu/MonthsMenu.vue";

export default {
  name: "MonthsCarousel",
  components: {MonthsMenu}
}
</script>

<style scoped>

</style>