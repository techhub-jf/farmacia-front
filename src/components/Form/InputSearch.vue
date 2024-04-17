<template>
    <div>
        <strong class="form-title" v-if="title">{{ title }}</strong>
        <div class="farmacia-techhub-input-icon farmacia-techhub-input-icon--left form-group-search input-group">
            <input type="text" class="form-control form-control-farmacia-techhub form-control-farmacia-techhub-search"
                :value="modelValue" @input="handleInput" :placeholder="placeholder" @keyup.enter="updateModel()"
                :disabled="disabled" style="height:auto">
            <div class="input-group-append">
                <button class="btn btn-search" @click="updateModel()" :disabled="disabled"><i
                        class="las la-search"></i></button>
            </div>
            <span v-if="modelValue == null || modelValue == ''"
                class="farmacia-techhub-input-icon__icon farmacia-techhub-input-icon__icon--left">
                <span>
                    <i class="las la-search"></i>
                </span>
            </span>
            <span v-else class="farmacia-techhub-input-icon__icon farmacia-techhub-input-icon__icon--left">
                <span @click="erase" class="button--erase" v-if="!disabled">
                    <i class="las la-times"></i>
                </span>
            </span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { watch } from 'vue';


const modelValue = defineModel('');
const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    disabled: {
        default: false,
        type: Boolean
    },
    autoSearch: {
        default: true,
        type: Boolean
    }
});

const emit = defineEmits(['update:modelValue', 'updateModel']);

let currentTimeout: number | null | NodeJS.Timeout = 0;

const runTimeout = () => {
    if (!props.autoSearch)
        return;
    if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
    }
    currentTimeout = setTimeout(updateModel, 500);
};
const handleInput = (event: Event) => {
    const target = (<HTMLInputElement>event.target)
    emit('update:modelValue', target.value);
};
const updateModel = () => {
    if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
    }
    emit('updateModel');
};
const erase = () => {
    if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
    }
    emit('update:modelValue', '');
    updateModel();
};

watch(modelValue, (old, newValue) => {
    if (old == newValue)
        return;
    if (!modelValue || modelValue.value == '') {
        erase();
    } else {
        runTimeout();
    }
});
</script>
<style type="text/css">
.form-control-farmacia-techhub-search {
    padding-left: 2.8rem !important;
}

.form-control-farmacia-techhub-search-sm {
    max-width: 180px;
    margin-right: 0px;
}

.farmacia-techhub-input-icon {
    position: relative !important;
    width: 100% !important;

}

.farmacia-techhub-input-icon>.farmacia-techhub-input-icon__icon>span {
    display: table;
    height: 100%;
    width: 100%;
    color: #808080;
    font-size: 18px;
}

.farmacia-techhub-input-icon>.farmacia-techhub-input-icon__icon>span>i {
    display: table-cell;
    vertical-align: middle;
    text-align: center;

}

.farmacia-techhub-input-icon>.farmacia-techhub-input-icon__icon {
    position: absolute;
    height: 100%;
    display: inline-block;
    text-align: center;
    top: 0;
    width: 3.2rem;
}

.farmacia-techhub-input-icon>.farmacia-techhub-input-icon__icon.farmacia-techhub-input-icon__icon--left {
    left: 0;
    z-index: 45;
}

.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn {
    border-top-right-radius: 15px !important;
    border-bottom-right-radius: 15px !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    width: 50px;
}

.btn.btn-search {
    color: #fff;
    background: #0E78F9;
}

.btn.btn-search:hover {
    color: #fff;
    background: #0762d1;
}

.button--erase {
    cursor: pointer;
}
</style>