<template>
    <div>
        <strong class="form-title" v-if="props.title">{{ props.title }}</strong>
        <div class="farmacia-techhub-input-icon farmacia-techhub-input-icon--right form-group-password">
            <input class="form-control form-control-farmacia-techhub form-control-farmacia-techhub-password"
                :type="type" :value="modelValue" @input="handleInput" :placeholder="props.placeholder"
                @keyup.enter="enter()" />
            <span v-if="type == 'password'"
                class="farmacia-techhub-input-icon__icon farmacia-techhub-input-icon__icon--right">
                <span @click="toggleMask('text')" class="button--toggle">
                    <span class="material-symbols-outlined">
                        visibility
                    </span>
                </span>
            </span>
            <span v-else class="farmacia-techhub-input-icon__icon farmacia-techhub-input-icon__icon--right">
                <span @click="toggleMask('password')" class="button--toggle">
                    <span class="material-symbols-outlined">
                        visibility_off
                    </span>
                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const modelValue = defineModel();
const props = defineProps({
    placeholder: {
        type: [String],
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
})
const type = ref('password');

const emit = defineEmits(['update:modelValue', 'updateModel', 'changed', 'enterPress']);

const handleInput = (event: Event) => {
    const target = (<HTMLInputElement>event.target)
    emit('update:modelValue', target.value);

};

const toggleMask = (_type: string) => {
    type.value = _type;
};
const enter = () => {
    emit('enterPress');
};
</script>
<style type="text/css" scoped>
.form-control-farmacia-techhub-password {
    padding-right: 2.8rem !important;
}

.form-control-farmacia-techhub-password-sm {
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
    top: 15%;
    width: 3.2rem;
}

.farmacia-techhub-input-icon>.farmacia-techhub-input-icon__icon.farmacia-techhub-input-icon__icon--right {
    right: 0;
    z-index: 45;
}

.button--toggle {
    cursor: pointer;
    font-size: 1rem;
}
</style>