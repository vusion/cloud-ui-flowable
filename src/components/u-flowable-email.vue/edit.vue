<template>
<div :class="$style.root">
    <u-input v-model="currentValue" v-bind="$attrs" size="full"></u-input>
</div>
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
                    } else {
                        this.$emit('touched', true);
                        this.$emit('error', {
                            type: 'emailFormatError',
                            message: '邮箱格式出错',
                        });
                    }
                } else {
                    this.$emit('input', currentValue);
                }
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
