<template>
<div :class="$style.root">
    <u-number-input ref="input" :value="currentValue" @blur="onBlur($event)" :precision="precision" :step="precision" size="full"></u-number-input>
</div>
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
            default: 0,
        },
    },
    data() {
        return {
            currentValue: this.formatValue(this.value),
        };
    },
    computed: {
        precision() {
            const precision = !this.point ? 1 : `0.${'1'.padStart(this.point, '0')}`;
            // TODO  convert type of precision string to number
            return precision;
        },
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                this.$emit('input', currentValue);
            },
            immediate: true,
        },
        value(value) {
            this.currentValue = this.formatValue(value);
        },
    },
    methods: {
        formatValue(value) {
            let valueNumber = Number(value);
            if (isNaN(valueNumber)) {
                valueNumber = value;
            }
            return typeof value === 'number' ? value : valueNumber;
        },
        onBlur($event) {
            this.$emit('touched', true);
            this.currentValue = this.$refs.input.currentValue;
        },
    },
};
</script>

<style module>
.root {}

</style>
