<template>
    <div id="app">
        <router-view style="height: 100%;" v-slot="{ Component }">
            <transition>
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style>
body {
    background-color: rgb(128, 128, 128, 0.3)
}

html {
    height: 100%;
}

#app {
    height: 100%;
}
</style>
