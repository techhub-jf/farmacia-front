<template>
    <div>
        <strong class="form-title" v-if="props.title">{{ props.title }}</strong>
        <br v-if="title">
        <VueDatePicker v-model="model" @update:model-value="handleInput" :format="props.format" :disabled="props.disabled"
            :locale="props.locale" :auto-position="true">
        </VueDatePicker>
    </div>
</template>
<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    format: {
        type: String,
        default: ''
    },
    locale: {
        type: String,
        default: 'pt-BR'
    },
    disabled: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(['update:modelValue', 'updateModel']);

const model = ref(new Date);

const handleInput = () => {
    emit('update:modelValue', model);
    emit('updateModel');
};
</script>
<style type="text/css">
.dp__main .dp__input_wrap .dp__input {
    border-radius: 15px;
}

.dp__cell_inner {
    margin: 0.1rem;
}

:root {
    --dp-cell-border-radius: 2rem;
    --dp-primary-color: #031D42;
}

.dp__theme_light {
    --dp-primary-color: #031D42;
}
</style>