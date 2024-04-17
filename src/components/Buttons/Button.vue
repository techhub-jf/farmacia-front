<template>
    <div>
        <button :disabled="props.disabled" class="btn"
            v-bind:class="[props.outline ? 'button--line-' + props.color : 'button--' + props.color, props.shadow ? 'button-shadow' : '']"
            @click="clicked" data-toggle="tooltip" :title="props.tooltip">
            <div class="d-flex align-items-center">
                <i v-if="props.icon" :class="[props.icon, !props.hide && props.title ? 'mr-2' : '']"></i>
                <span v-bind:class="{ 'hide_btn': props.hide }">{{ props.title }}</span>
            </div>
        </button>
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    icon: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    outline: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: ''
    },
    tooltip: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    hide: {
        type: Boolean,
        default: false
    },
    shadow: {
        type: Boolean,
        default: false
    },
});
const emit = defineEmits(['action']);
const clicked = () => {
    emit('action');
};
</script>
<style>
.btn {
    width: auto;
    align-items: center;
    border-radius: 15px !important;
    font-weight: 500 !important;
}

.btn:focus {
    box-shadow: none !important;
}

.hide_btn {
    white-space: nowrap;
    width: 0;
    overflow: hidden;
    align-items: center;
    margin-left: 0;
    transition: width 0.1s ease;
}

.btn:hover .hide_btn {
    width: 100%;
    margin-left: 0.5rem;
    transition: width 0.3s ease;
}

.btn.button--green {
    background: var(--green-farmacia-techhub);
    color: #FFF;
    font-size: 14px;
}

.btn.button--green:hover {
    background: var(--dark-green-farmacia-techhub);
    color: #FFF;
}

.btn.button--line-green {
    background: #3FD47844;
    color: var(--green-farmacia-techhub);
    font-size: 14px;
    border: 1px solid var(--green-farmacia-techhub);
}

.btn.button--line-green:hover {
    background: #3FD47899;
    color: var(--green-farmacia-techhub);
}

.btn.button--red {
    background: var(--red-farmacia-techhub);
    color: #FFF;
    font-size: 14px;
}

.btn.button--red:hover {
    background: var(--red-farmacia-techhub);
    color: #FFF;
}

.btn.button--line-red {
    background: #DB235644;
    color: var(--red-farmacia-techhub);
    font-size: 14px;
    border: 1px solid var(--red-farmacia-techhub);
}

.btn.button--line-red:hover {
    background: #DB235699;
    color: var(--red-farmacia-techhub);
}

.btn.button--blue {
    background: var(--blue-farmacia-techhub);
    color: #FFF;
    font-size: 14px;
}

.btn.button--blue:hover {
    background: var(--blue-farmacia-techhub);
    color: #FFF;
}

.btn.button--line-blue {
    background: #0E78F944;
    color: var(--blue-farmacia-techhub);
    font-size: 14px;
    border: 1px solid var(--blue-farmacia-techhub);
}

.btn.button--line-blue:hover {
    background: #0E78F999;
    color: var(--blue-farmacia-techhub);
}

.btn.button--logout {
    background: transparent;
    color: var(--red-farmacia-techhub);
    font-size: 14px;
    font-weight: bold;
    border: 1px solid var(--red-farmacia-techhub);
}

.btn.button--logout:hover {
    background: var(--red-farmacia-techhub);
    color: #FFF;
}

.button-shadow {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>