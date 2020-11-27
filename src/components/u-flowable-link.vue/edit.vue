<template>
    <u-input v-model="currentValue" v-bind="[$attrs, $props]"></u-input>
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
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        currentValue(currentValue) {
            if (isURL(currentValue)) {
                this.$emit('input', currentValue);
            }
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
