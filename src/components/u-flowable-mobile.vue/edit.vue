<template>
    <u-input v-model="currentValue" v-bind="$attrs" rules="mobile"></u-input>
</template>

<script>
import UInput from 'cloud-ui.vusion/src/components/u-input.vue';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
export default {
    components: {
        UInput,
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
            console.log(currentValue, isMobilePhone(currentValue, 'zh-CN'));
            if (currentValue && isMobilePhone(currentValue, 'zh-CN')) {
                this.$emit('input', currentValue);
            }
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
