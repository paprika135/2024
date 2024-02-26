<script setup>
import { dynamicPath } from '../router/index.js';
const props = defineProps({
    to:{
        type:String,
        required:true
    }
})

//用于切换绑定点击事件。
const pull = ()=>{
    dynamicPath.value = props.to;
}
</script>
<template>
    <div>
        <a href="#" @click.prevent="pull" >
        <slot></slot>
    </a>
    </div>
</template>
<style type="scss" scoped>
div{
    margin-right: 20px;
    a{
        text-decoration: none;
        color: inherit;
    }
}
</style>