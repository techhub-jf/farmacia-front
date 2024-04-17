<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logoURL" alt="Vue" />
            <div>
                <span class="text">Farmacia TechHub</span>
            </div>
        </div>
        <div class="menu-toggle-wrap">
            <button class="btn menu-toggle" @click="ToggleMenu">
                <span class="icon material-symbols-outlined">
                    menu
                </span>
            </button>
        </div>
        <div class="menu">
            <router-link to="/products" class="button">
                <span class="icon material-symbols-outlined">
                    medication_liquid
                </span>
                <span class="text">Produtos</span>
            </router-link>
            <router-link to="/sales" class="button">
                <span class="icon material-symbols-outlined">
                    shopping_cart
                </span>
                <span class="text">Vendas</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/settings" class="button">
                <span class="icon material-symbols-outlined">
                    settings
                </span>
                <span class="text">Configurações</span>
            </router-link>
            <div class="divider"></div>
            <div class="account">
                <span class="icon material-symbols-outlined">
                    account_circle
                </span>
                <div>
                    <span class="text">usuario</span>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts" setup>
import logoURL from '@/assets/logo.png'
import { onMounted, ref } from 'vue';

const is_expanded = ref(false);

onMounted(() => {
    is_expanded.value = localStorage.getItem("is_expanded") === 'true';
});
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem("is_expanded", is_expanded.value.toString())
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--light);
    color: var(--dark);

    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100%;
    padding: 1rem;

    transition: 0.2s ease-in-out;
    border-radius: 1.2rem;
    margin-left: 0.5rem;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

aside .flex {
    flex: 1 1 0%;
}

aside .logo {
    display: flex;
    align-items: center;
    transition: 0.2s ease-in;
    margin-bottom: 1rem;
}

aside .logo .text {
    display: flex;
    flex-wrap: nowrap;
    width: max-content;
    opacity: 0;
    margin-left: 0.8rem;
    transition: opacity 0s ease-in-out;
}

aside img {
    width: 2rem;
}

aside .button {
    display: flex;
    align-items: center;
    text-decoration: none;

    transition: 0.2s ease-in-out;
    padding: 0.5rem 1rem;
}

aside .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

aside .menu-toggle-wrap {
    display: flex;
    margin-bottom: 1rem;

    transition: 0.2s ease-in-out;
}

aside .menu-toggle-wrap .menu-toggle {
    padding: 0;
    transition: 0.2s ease-in-out;
}

aside .menu-toggle-wrap .menu-toggle.btn:active {
    border-color: transparent;
}

aside .menu-toggle-wrap .menu-toggle .icon {
    font-size: 2rem;
    color: var(--dark);
    transition: 0.2s ease-out;
}

aside .menu-toggle-wrap .menu-toggle .icon:hover {
    color: var(--primary);
}

aside .menu {
    display: flex;
    margin: 0 -1rem;
    flex-direction: column;
}


aside .menu .button .icon {
    font-size: 2rem;
    color: var(--dark);
    transition: 0.2s ease-in-out;
}

aside .menu .button .text {
    color: var(--dark);
    transition: 0.2s ease-in-out;
}

aside .menu .button {
    display: flex;
    padding: 1rem;
    align-items: center;
}


aside .menu .button:hover .icon,
aside .menu .button:hover .text {
    color: var(--primary);
}


aside .menu .button.router-link-exact-active .icon {
    color: var(--primary);
}

aside .menu .button.router-link-exact-active .text {
    color: var(--primary);
}

aside.is-expanded {
    width: var(--sidebar-width);
}

aside.is-expanded .logo .text {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

aside.is-expanded .button .text {
    opacity: 1;
}

aside.is-expanded .button .icon {
    margin-right: 1rem;
}

aside .divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #c1c2c3;
    width: calc(100% - 30px);
    margin-left: auto;
    margin-right: auto;
}

aside .menu .account {
    display: flex;
    padding: 1rem;
    align-items: center;
}

aside .menu .account .icon {
    font-size: 2rem;
    color: var(--grey);
    transition: 0.2s ease-in-out;
}

aside .menu .account .text {
    opacity: 0;
    color: var(--grey);
    transition: 0.2s ease-in-out;
}

aside.is-expanded .account .icon {
    margin-right: 1rem;
}

aside.is-expanded .menu .account .text {
    opacity: 1;
}
</style>