<template>
    <div>
        <strong class="form-title" v-if="title">{{ title }}</strong>
        <select type="text" class="form-select form-control-farmacia-techhub" v-model="val" @change="changeOption"
            :disabled="disabled">
            <option v-for="option in options" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { FormSelectOptions } from '@/utils/Utils';
export default {
    name: 'Select',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        options:{
            type: Array as PropType<FormSelectOptions[]>,
        },
        title: null,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            val: ''
        }
    },
    mounted() {
        this.val = this.modelValue;
    },
    watch: {
        modelValue: function () {
            this.val = this.modelValue;
        }
    },

    methods: {
        changeOption(event: Event) {
            const target = (<HTMLInputElement>event.target)
            this.$emit('update:modelValue', target.value);
        },
    }
}
</script>
<style type="text/css"></style>