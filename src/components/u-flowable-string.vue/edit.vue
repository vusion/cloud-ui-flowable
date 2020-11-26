<template>
    <u-input v-bind="$props" :rules="$attrs.rules"></u-input>
</template>

<script>
import UInput from 'cloud-ui.vusion/src/components/u-input.vue';
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
            this.$emit('input', currentValue);
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
