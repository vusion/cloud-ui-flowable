<template>
    <u-checkboxes v-model="currentValue" :min="min" :max="max" v-bind="$attrs" :class="$style.checkboxes">
        <template v-for="item in list">
            <div :key="item.key" :class="$style.checkbox">
                <u-image :src="item.image" fit="fill" :class="$style.image"></u-image>
                <div :class="$style.desc">
                    <u-checkbox :label="item.key">
                        {{ item.label }}
                    </u-checkbox>
                </div>
            </div>
        </template>
    </u-checkboxes>
</template>

<script>
import UCheckboxes from 'cloud-ui.vusion/src/components/u-checkboxes.vue/index.vue';
import UCheckbox from 'cloud-ui.vusion/src/components/u-checkbox.vue/index.vue';
import UImage from 'cloud-ui.vusion/src/components/u-image.vue/index.vue';
export default {
    components: {
        UCheckboxes,
        UCheckbox,
        UImage,
    },
    props: {
        value: String,
        list: Array,
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
    },
    data() {
        return {
            currentValue: this.splitValue(this.value),
        };
    },
    watch: {
        currentValue(currentValue) {
            this.$emit('input', currentValue);
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
            return (value || '').split(',').filter((i) => i);
        },
    },
};
</script>

<style module>

.checkbox {
    display: inline-block;
    vertical-align: top;
    width: calc((100% - 20px * 4) / 4);
    margin: 0 10px!important;
}

.image {
    width: 100%;
    height: 160px;
}
.desc {

}

</style>
