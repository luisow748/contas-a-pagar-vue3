<script setup lang="ts">
import {RouterView} from 'vue-router'

import HeaderView from "@/views/HeaderView2.vue";</script>

<template>
  <div class="flex-container">
    <div class="item1">
      <HeaderView/>
    </div>
    <div class="item2 ">
      <RouterView/>
    </div>


  </div>
  <!--    <RouterView/>-->
  <!--    <HeaderView/>-->
</template>

<style scoped>
/*header {*/
/*  line-height: 1.5;*/
/*  max-height: 100vh;*/
/*  place-content: start;*/

/*}*/

/*.logo {*/
/*  display: block;*/
/*  margin: 0 auto 2rem;*/
/*}*/

/*nav {*/
/*  width: 100%;*/
/*  font-size: 12px;*/
/*  text-align: center;*/
/*  margin-top: 2rem;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: var(--color-text);*/
/*}*/

/*nav a.router-link-exact-active:hover {*/
/*  background-color: transparent;*/
/*}*/

/*nav a {*/
/*  display: inline-block;*/
/*  padding: 0 1rem;*/
/*  border-left: 1px solid var(--color-border);*/
/*}*/

/*nav a:first-of-type {*/
/*  border: 0;*/
/*}*/

/*@media (min-width: 1024px) {*/
/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  .logo {*/
/*    margin: 0 2rem 0 0;*/
/*  }*/

/*  header .wrapper {*/
/*    !*display: flex;*!*/
/*    !*place-items: flex-start;*!*/
/*    !*flex-wrap: wrap;*!*/
/*  }*/

/*  nav {*/
/*    text-align: left;*/
/*    margin-left: -1rem;*/
/*    font-size: 1rem;*/

/*    padding: 0 0;*/
/*    margin-top: 0;*/
/*  }*/
/*}*/

/*
*/


</style>
