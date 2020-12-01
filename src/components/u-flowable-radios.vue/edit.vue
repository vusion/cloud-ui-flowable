<template>
    <u-radios v-model="currentValue" v-bind="$attrs">
        <u-radio v-for="item in $attrs.list" :key="item.key" :label="item.key">{{ item.value }}</u-radio>
    </u-radios>
</template>

<script>
import URadios from 'cloud-ui.vusion/src/components/u-radios.vue';
import URadio from 'cloud-ui.vusion/src/components/u-radios.vue/radio';
export default {
    components: {
        URadios,
        URadio,
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
