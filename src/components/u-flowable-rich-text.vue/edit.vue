<template>
    <div :class="$style.root">
        <u-rich-text v-model="currentValue"></u-rich-text>
    </div>
</template>

<script>
import URichText from '../u-rich-text.vue';
import throttle from 'lodash/throttle';
export default {
    components: {
        URichText,
    },
    props: {
        value: String,
        wait: {
            type: Number,
            default: 1000,
        },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                this.triggerInput();
            },
            immediate: true,
        },
        value(value) {
            this.currentValue = value;
        },
    },
    created() {
        this.triggerInput = throttle(this.triggerInput.bind(this), this.wait);
    },
    beforeDestroy() {
        this.triggerInput.flush();
    },
    methods: {
        triggerInput() {
            this.$emit('input', this.currentValue);
        },
    },
};
</script>

<style module>
.root {}

</style>
