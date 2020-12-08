<template>
<div :class="$style.root">
    <u-input v-model="currentValue" v-bind="$attrs"  size="full"></u-input>
</div>
</template>

<script>
import UInput from 'cloud-ui.vusion/src/components/u-input.vue';
import isURL from 'validator/es/lib/isURL';
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
                    if (isURL(currentValue)) {
                        this.$emit('error', null);
                        this.$emit('input', currentValue);
                    } else {
                        this.$emit('error', {
                            type: 'urlFormatError',
                            message: '链接格式出错',
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
