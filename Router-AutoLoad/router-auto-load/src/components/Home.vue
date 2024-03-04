<script setup lang="ts">
import getRoutes from '../router/autoload';

</script>

<template>
  <div class="nav" >
    <span v-for="(route,index) in getRoutes()" :key="index">
      <router-link  :to="{name:route.name}" >{{ route.name }}</router-link>
    </span>
  </div>
  <div class="views">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.nav{
  a{
    display: inline block;
    text-decoration: none;
    color: black;
    margin-left: 10px;
  }
}
</style>
