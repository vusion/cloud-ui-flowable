<template>
    <u-input v-model="currentValue" v-bind="$attrs"></u-input>
</template>

<script>
import UInput from 'cloud-ui.vusion/src/components/u-input.vue';
import isEmail from 'validator/es/lib/isEmail';
export default {
    components: {
        UInput,
    },
    props: {
        value: String,
        required: Boolean,
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                if (currentValue) {
                    if (isEmail(currentValue)) {
                        this.$emit('error', null);
                        this.$emit('input', currentValue);
                        return;
                    } else {
                        this.$emit('error', {
                            type: 'emailFormatError',
                            message: '邮箱格式出错',
                        });
                    }
                } else {
                    if (this.required) {
                        this.$emit('error', {
                            type: 'requiredError',
                            message: '此项必填',
                        });
                    } else {
                        this.$emit('error', null);
                    }
                }
                this.$emit('input', '');
            },
            immediate: true,
        },
        value(value) {
            this.currentValue = value;
        },
    },
};
</script>

<style module>
.root {}

</style>
