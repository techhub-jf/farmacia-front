<template>
    <div>
        <div class="w-100 d-flex mt-2 mb-3">
            <span class="page-title">{{ props.title }}</span>
        </div>
        <div>
            <Button title="Sair" color="red" :typeNew="true" @action="logout" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import * as LoginUtils from '@/utils/LoginUtils'
import Button from '@/components/Buttons/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps({
    title: String
});

const logout = () => {
    LoginUtils.logout();
    router.push({ name: 'login' });
}
</script>
<style></style>