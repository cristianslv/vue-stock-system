<template>
  <div id="app">
    <div class="row d-flex justify-content-center">
      <div class="col-6 text-center">
        <router-link to="/">
          <img src="./assets/stock.png" alt="Estoque Udesc" class="mt-4 home-image">
        </router-link>
      </div>
    </div>
    
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import './App.css';
</style>
