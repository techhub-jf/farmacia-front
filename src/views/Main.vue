<template>
    <div>
        <div class="wrapper" style="height:100%">
            <div class="main-panel d-flex">
                <Sidebar class="me-3" />
                <div class="content">
                    <router-view v-slot="{ Component, route }">
                        <transition name="fade">
                            <component :is="Component" :key="route.path" :title="title" />
                        </transition>
                    </router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Sidebar from '@/components/Sidebar.vue'
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const title = ref('');
const route = useRoute();

onMounted(() => {
    title.value = document.title;
})
watch(route, () => {
    title.value = document.title;
});
</script>

<style>
/**********MAIN PANEL*************/
body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background: linear-gradient(var(--vt-c-techhub), rgba(255, 233, 201, 0.1));

    height: 100%;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

hr {
    color: black;
}

.navbar {
    background-color: transparent;
    min-height: 80px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 29px 0px;
    margin-bottom: 20px;
}

.navbar .navbar-nav {
    align-items: center;
}

.navbar-nav .nav-item {
    text-transform: uppercase;
    margin-left: 20px;
    font-weight: 400;
    font-size: 21px;
    transition: color 0.2s, font-size 1s;
}

.wrapper {
    height: 100%;
}

.main-panel {
    padding-top: 30px;
    padding-bottom: 20px;
    height: 100%;
}

.main-panel>.sidebar {
    width: 300px;
    padding: 10px;
    height: 100%;
}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu {
    overflow-y: auto;
}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu>div {
    padding: 10px;
    margin: 3px;
    border-radius: 8px;
    display: flex !important;
    align-items: center;
}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu>div i {
    margin-right: 5px;
    color: var(--black-farmacia-techhub);
    font-size: 25px;

}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu>div .nav-text {
    color: var(--black-farmacia-techhub);
    font-weight: 500;
    transition: color 0.2s, font-size 1s;
}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu>div .nav-text:hover {
    color: black;
    font-weight: 500;
    transition: color 0.2s, font-size 1s;
}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu>div a {
    text-decoration: none;
}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu>div a:hover {
    text-decoration: none;
}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu>.route-active {
    background-color: rgba(100, 182, 136, 0.789);
    color: black;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: color 0.2s, font-size 1s, background 0.3s;
}

.main-panel>.sidebar>.sidebar-wrapper>.nav-menu>.route-active .nav-text {
    color: black !important;
    transition: color 0.2s, font-size 1s;
}

.main-panel>.content {
    width: 100%;
    background-color: var(--light);
    border-radius: 1.2rem;
    height: 100%;
    overflow-y: auto;
    padding: 20px;
    margin-right: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.footerbar {
    position: fixed;
    width: 100% !important;
    bottom: 0;
    padding: 10px;
    background: linear-gradient(rgba(243, 229, 210, 0.8), rgba(255, 233, 201, 0.1));
    background-color: #FFF;
    border-radius: 20px;
}

.footerbar>div i {
    color: #b9780087;
    font-size: 25px;
}

.footerbar>div>.route-active i {
    color: var(--black-farmacia-techhub);
    font-size: 25px;
    transition: color 0.2s, font-size 1s,
}

.main-panel>.content>div:nth-child(2) {
    padding: 0px 15px;
}

@media only screen and (min-width: 768px) {
    .desktop-only {
        display: block;
    }

    .mobile-only {
        display: none;
    }
}

@media (max-width: 768px) {
    body {
        font-size: 0.9rem;
    }

    .desktop-only {
        display: none !important;
    }

    .mobile-only {
        display: block;
    }

    .main-panel {
        padding-top: 0;
        padding-bottom: 0;
    }

    .content {
        box-shadow: 0;
        border-radius: 18px 18px 0px 0px !important;
        position: relative !important;
        margin-right: 0px !important;
        bottom: 20px !important;
    }

    .navbar {
        position: fixed !important;
        background: #fffaf4 !important;
        width: 100%;
        z-index: 999;
    }

    .dropdown-perfil-lg {
        display: none;
    }

    .navbar-nav .nav-item {
        margin-bottom: 5px;
        margin-top: 5px;
    }

    .dropdown-perfil-sm>ul {
        padding-left: 0 !important;
    }

    .dropdown-perfil-sm>ul>* {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .navbar-nav .nav-item {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 16px;
    }

    .btn-logout button {
        padding: 0;
    }
}

/**********MAIN PANEL END*************/
</style>
<style scoped>
.fade-enter-active {
    transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to,
.fade-leave-active {
    opacity: 0;
}
</style>