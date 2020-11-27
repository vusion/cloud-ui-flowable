<template>
    <u-number-input v-model="currentValue" v-bind="[$attrs, $props]" :precision="precision"></u-number-input>
</template>

<script>
export default {
    props: {
        value: Number,
        min: {
            type: Number,
            default: -Infinity,
        },
        max: {
            type: Number,
            default: Infinity,
        },
        point: {
            type: Number,
            decimal: 0,
        },
    },
    data() {
        return {
            currentValue: this.formatValue(this.value),
        };
    },
    computed: {
        precision() {
            return !this.point ? 1 : `0.${'1'.padStart(this.ponit, '0')}`;
        },
    },
    watch: {
        currentValue(currentValue) {
            if (currentValue) {
                this.$emit('input', currentValue);
            }
        },
        value(value) {
            this.currentValue = this.formatValue(value);
        },
    },
    methods: {
        formatValue(value) {
            return typeof value === 'number' ? value : Number(value);
        },
    },
};
</script>

<style module>
.root {}

</style>
