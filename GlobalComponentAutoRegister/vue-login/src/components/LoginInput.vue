<template>
    <input class="w-full 
    px-2 mt-4 
    rounded-md 
    border-2
    border-violet-500 
    outline-none 
    focus:ring ring-violet-500 ring-offset-2 duration-300" 
    :placeholder="props.placeHolder"
        type="text">
</template>

<script setup lang="ts">
const props = defineProps({
    placeHolder: {
        type: String,
        required: true
    }
})

</script>

<style scoped></style>