<template>
    <div class="form-input-farmacia-techhub">
        <strong class="form-title" v-if="title">{{ title }}</strong>
        <div class="form-group input-group emoji-picker-container">
            <div v-if="prefix" class="prefix">
                <span>{{ prefix }}</span>
            </div>
            <input class="form-control form-control-farmacia-techhub" :disabled="disabled" :value="modelValue"
                @input="handleInput" :placeholder="placeholder" @keyup.enter="updateModel()" @change="changed"
                v-maska:[maskOptions()] />
            <div v-if="sufix" class="sufix">
                <span>{{ sufixData }}</span>
            </div>
        </div>
        <div v-if="info"><small v-bind:style="infoStyle()" v-on:click="infoPressed">{{ info }}</small></div>
    </div>
</template>

<script lang="ts" setup>
import { vMaska } from "maska"
import { onMounted, ref } from "vue";

const modelValue = defineModel();
const emit = defineEmits(['update:modelValue', 'updateModel', 'changed'])

const props = defineProps({
    placeholder: {
        type: [String],
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    money: {
        type: Boolean,
        default: false
    },
    phone: {
        type: Boolean,
        default: false
    },
    cnpj: {
        default: false,
        type: Boolean,
    },
    cpf: {
        default: false,
        type: Boolean,
    },
    prefix: {
        type: String,
        default: ''
    },
    sufix: {
        type: String,
        default: ''
    },
    maxValue: {
        type: Number,
        default: null,
    },
    minValue: {
        type: Number,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    info: {
        type: String,
        default: ''
    },
    infoClick: {
        type: Function,
        default: null,
    },
    minNumber: {
        type: Boolean,
        default: false,
    },
    maxNumber: {
        type: Boolean,
        default: false,
    }
});

const sufixData = ref('');

onMounted(() => {
    sufixData.value = props.sufix;
})

const infoPressed = (): void => {
    if (props.infoClick != null)
        props.infoClick();
};

const infoStyle = () => {
    if (props.infoClick != null) {
        return {
            'cursor': 'pointer',
            'color': 'var(--blue-robin)'
        }
    }
    return {};
};

const handleInput = (event: Event): void => {
    const target = (<HTMLInputElement>event.target)
    emit('update:modelValue', target.value);

};
const updateModel = (): void => {
    emit('updateModel');
};
const changed = (): void => {
    emit('changed');
};

const maskOptions = (): any => {
    if (props.cpf && props.cnpj) {
        return { mask: ["###.###.###-##", '##.###.###/####-##'] }
    } else if (props.cpf) {
        return { mask: "###.###.###-##" }
    } else if (props.cnpj) {
        return { mask: '##.###.###/####-##' }
    } else if (props.phone) {
        return { mask: "(##) #####-####" }
    } else if (props.money) {
        return {
            preProcess: (val: string) => val.replace(/[R$.]/g, ''),
            postProcess: (val: string) => {
                if (!val) return ''
                let sub = 3 - (val.includes(',') ? val.length - val.indexOf(',') : 0);
                sub = sub < 0 ? sub - 1 : sub;
                val = val.replace(/[,]/g, '.');
                let numberVal = parseFloat(val);
                numberVal = Math.trunc(numberVal * 100) / 100;

                return Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(numberVal)
                    .slice(0, sub > 0 ? -sub : undefined)
            }
        }
    }
}
</script>
<style>
.prefix {
    background-color: var(--gray-farmacia-techhub);
    padding: 0.375rem 0.75rem;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    color: #fff;
    font-size: 0.8rem;
}

.sufix {
    background-color: var(--gray-farmacia-techhub);
    padding: 0.375rem 0.75rem;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    color: #fff;
    font-size: 0.8rem;
}

.form-input-farmacia-techhub .form-group {
    margin-bottom: 0;
}
</style>