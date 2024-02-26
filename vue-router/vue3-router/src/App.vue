<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">about</router-link>
  </div>
  <hr>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
div .nav{
  display: flex;
  flex-direction: row;
}
</style>
