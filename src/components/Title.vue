<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="d-flex justify-content-start">
    <h3 class="">{{ msg }}</h3>
<!--    <Logo />-->
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.6rem;
}

.greetings h1,
.greetings h3 {
  text-align: left;
  margin-bottom: 10px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
