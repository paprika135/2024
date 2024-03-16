<template>
    <input class="w-full 
    px-2 mt-4 
    rounded-md 
    border-2
    border-violet-500 
    outline-none 
    focus:ring ring-violet-500 ring-offset-2 duration-300" 
    :placeholder="props.placeHolder"
       @input="change($event.target!)" type="text">
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const emits = defineEmits(["update:modelValue"])
const props = defineProps({
    placeHolder: {
        type: String,
        required: true
    },
    modelValue:{
        type:String,
    }
})

const change = (email:any)=>{
    emits("update:modelValue",email.value)
}

</script>

<style scoped></style>