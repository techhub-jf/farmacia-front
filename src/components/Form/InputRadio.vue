<template>
    <div class="radio--farmacia-techhub">
        <strong class="form-title" v-if="title != ''">{{ title }}</strong>
        <br v-if="title != ''">
        <div class="d-flex">
            <label v-for="option in props.options" :key="option.value" style="margin-bottom: 0!important;">
                <input type="radio" :name="id_" :value="option.value" :checked="option.value == modelValue"
                    @change="$emit('update:modelValue', option.value)">
                {{ option.label }}
            </label>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { FormSelectOptions, generateId } from '@/utils/Utils';

const modelValue = defineModel();
const props = defineProps({
    options: {
        type: Array as PropType<FormSelectOptions[]>,
    },
    title: {
        type: String,
        default: '',
    },
});
const id_ =  ref(generateId());

</script>
<style type="text/css">
.radio--farmacia-techhub label input {
    filter: hue-rotate(180deg);
}

.radio--farmacia-techhub label {
    margin-right: 2.5rem;
}
</style>