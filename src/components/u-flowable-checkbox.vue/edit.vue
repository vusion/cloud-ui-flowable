<template>
<div :class="$style.root">
    <u-checkboxes v-model="currentValue" :min="min" :max="max">
        <u-checkbox v-for="item in list" :key="item.key" :label="item.key">{{ item.value }}</u-checkbox>
    </u-checkboxes>
</div>
</template>

<script>
import UCheckboxes from 'cloud-ui.vusion/src/components/u-checkboxes.vue/index.vue';
import UCheckbox from 'cloud-ui.vusion/src/components/u-checkbox.vue/index.vue';
export default {
    components: {
        UCheckboxes,
        UCheckbox,
    },
    props: {
        value: Array,
        list: Array,
        required: Boolean,
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
    },
    data() {
        return {
            currentValue: this.splitValue(this.value),
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                this.$emit('input', currentValue);
            },
            immediate: true,
        },
        value(value) {
            this.currentValue = this.splitValue(value);
        },
    },
    methods: {
        splitValue(value) {
            if (this.currentValue?.join(',') === value) {
                return this.currentValue;
            }

            if (Object.prototype.toString.call(value) === '[object Array]') {
                return value;
            } else {
                return (value || '').split(',').filter((i) => i);
            }
        },
    },
};
</script>

<style module>
.root {}

</style>
