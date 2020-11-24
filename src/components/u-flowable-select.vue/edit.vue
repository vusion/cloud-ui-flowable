<template>
    <u-select v-model="currentValue" v-bind="$attrs">
        <u-select-item v-for="item in list" :key="item.key" :value="item.key">{{ item.label }}</u-select-item>
    </u-select>
</template>

<script>
import USelect from 'cloud-ui.vusion/src/components/u-select.vue/index.vue';
import USelectItem from 'cloud-ui.vusion/src/components/u-select.vue/item.vue';
export default {
    components: {
        USelect,
        USelectItem,
    },
    props: {
        value: String,
        list: Array,
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
