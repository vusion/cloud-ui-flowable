<template>
    <u-rich-text v-model="currentValue" v-bind="$attrs"></u-rich-text>
</template>

<script>
import URichText from '../u-rich-text.vue';
export default {
    components: {
        URichText,
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
