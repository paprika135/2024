<script setup>
import {computed} from 'vue';
import router,{ dynamicPath } from '../router/index.js';

const view = computed(()=>{
  const route = router.routes.find(route=>{
    return route.path == dynamicPath.value
  })
  return route.component
})

</script>

<template>
  <component :is="view"></component>
</template>

<style scoped>

</style>
