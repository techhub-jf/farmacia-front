<template>
    <div>
        <div class="w-100 d-flex mt-2 mb-3">
            <span class="page-title">{{ props.title }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    title: String
});
</script>
<style></style>