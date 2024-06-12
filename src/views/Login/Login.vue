<template>
    <div class="h-100">
        <div class="login h-100 d-flex align-itens-center">
            <div class="card col-sm-12 col-md-12 col-lg-6 mx-auto my-auto card-farmacia-techhub card-login"
                style="text-align: center;">
                <div class="card-body p-5 d-flex flex-column justify-content-center h-100">
                    <div class="card-title mb-4">
                        <img :src="logoHeader" style="height:130px">
                        <span class="logo-brand-title ms-3">Farmacia TechHub</span>
                    </div>
                    <transition name="fade" :duration="{ enter: 800, leave: 100 }">
                        <div v-if="error" class="alert alert-danger alert-dismissible mt-2" role="alert">
                            <span>{{ error }}</span>
                        </div>
                    </transition>
                    <Input type="email" v-model="email" placeholder="Email" class="mx-auto w-75 mb-2" />
                    <InputPassword v-model="password" placeholder="Senha" class="mx-auto w-75 mb-2"
                        @enterPress="login" />
                    <Button v-if="!loading" title="Login" color="green" :typeNew="true" @action="login" />
                    <div v-else>
                        <span class="material-symbols-outlined spin p-2" style="font-weight: 800;">
                            progress_activity
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Input from '@/components/Form/Input.vue'
import InputPassword from '@/components/Form/InputPassword.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Button from '@/components/Buttons/Button.vue'
import logoHeader from '@/assets/logo.png'
import * as LoginServices from '@/services/LoginServices'
import * as LoginUtils from '@/utils/LoginUtils'

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref();
const loading = ref(false);

function login() {
    loading.value = true;
    LoginServices.login(email.value, password.value).then((result) => {
        const resultParse = <LoginUtils.Credentials>result;
        LoginUtils.login(resultParse);
        loading.value = false;
        router.push({ name: 'main' });
    }).catch((err) => {
        loading.value = false;
        if (err.status) {
            switch (err.status) {
                case 404:
                    error.value = "Usuário não reconhecido.";
                    break;
                case 401:
                    error.value = "Email ou senha incorretos, tente novamente.";
                    break;
                case 500:
                    error.value = "Aconteceu um erro interno, tente novamente mais tarde. Se o erro persistir, comunique o time técnico.";
                    break;
            }
        } else {
            error.value = "Aconteceu um erro interno, tente novamente mais tarde. Se o erro persistir, comunique o time técnico.";
        }

    })
}

</script>
<style>
.logo-brand-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--dark-alt);
}

@media (max-width: 768px) {
    .card-login {
        height: 100%;
        background: transparent !important;
        padding: 0;
    }

    .card-login>.card-body {
        padding: 0 !important;
    }
}
</style>