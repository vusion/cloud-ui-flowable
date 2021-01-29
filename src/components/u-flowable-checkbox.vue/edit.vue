<template>
<div :class="$style.root" :display="display">
    <u-checkboxes v-model="currentValue" :min="min" :max="max">
        <u-checkbox v-for="(item, index) in list" :key="index" :value="isSelected(item)" :label="item.value">{{ item.text }}</u-checkbox>
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
        display: {
            type: String, default: 'row',
        },
        required: Boolean,
        min: { type: Number, default: 0 },
        max: { type: Number, default: 99 },
    },
    data() {
        return {
            currentValue: this.splitValue(this.value),
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                this.$emit('input', currentValue || []);
            },
            immediate: true,
        },
        value(value) {
            this.currentValue = this.splitValue(value);
        },
    },
    methods: {
        isSelected(item) {
            return (this.currentValue || []).includes(item.value);
        },
        splitValue(value) {
            if (this.currentValue?.join(',') === value) {
                return this.currentValue;
            }
            if (this.currentValue?.join(',') === (value || []).join(',')) {
                return this.currentValue;
            }

            if (Object.prototype.toString.call(value) === '[object Array]') {
                return JSON.parse(JSON.stringify(value));
            } else {
                return (value || '').split(',').filter((i) => i);
            }
        },
    },
};
</script>

<style module>
.root {}
.root[display='row'] [class^='u-checkbox'] {
    display: inline-block;
}

.root[display='column'] [class^='u-checkboxes__'] {
    display: flex;
    flex-direction: column;
}

</style>
