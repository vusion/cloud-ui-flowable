<template>
<div :class="$style.root">
    <u-select v-model="currentValue" size="full">
        <u-select-item v-for="item in list" :key="item.key" :value="item.key">{{ item.text }}</u-select-item>
    </u-select>
</div>
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
        currentValue: {
            handler(currentValue) {
                this.$emit('input', currentValue);
            },
            immediate: true,
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
