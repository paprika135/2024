<template>
  <div>
    {{ response.data.data.name }}
  </div>
</template>

<script setup lang="ts">
import { http } from '../plugins/axios';
const response = await http.request<GetInfo>({
  url:'/info',
  method:'get'
})

console.log(response.data.data.name);


</script>

<style scoped>

</style>
