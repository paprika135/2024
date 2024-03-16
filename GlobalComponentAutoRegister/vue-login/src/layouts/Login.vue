<template>
    <div class="m-8 test">
        <div class="flex  bg-slate-200 shadow-md rounded-md overflow-hidden">
            <div class="flex-1 text-center mx-3">
                <h2 class="mt-5">会员登录</h2>
                <div>
                    <login-input v-model="email" v-bind="emailProps" placeHolder="请输入会员账号"></login-input>
                    <transition enter-active-class="animate__animated animate__flash">
                        <div v-if="errors.email" class="w-full h-6 mt-2 text-center align-middle bg-red-600 rounded-md">
                            注意：{{ errors.email }}</div>
                    </transition>
                    <login-input placeHolder="请输入会员密码"></login-input>
                </div>
                <button :disabled='!meta.valid'
                    class="w-full mt-3 bg-lime-400 rounded-md disabled:bg-slate-800">登录</button>
                <div class="text-sm mt-4">
                    <a href="" class="mr-8">没有账号？点击注册</a>
                    <a href="">忘记密码，点击找回</a>
                </div>
            </div>
            <div class="flex-1 hidden sm:block">
                <img class="bg-cover" src="../assets/patrick-shaun-Krr5UJWbYKs-unsplash.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { meta, errors, defineField } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required("邮箱必须填写"),
    }),
});

const [email, emailProps] = defineField('email');
</script>

<style scoped></style>