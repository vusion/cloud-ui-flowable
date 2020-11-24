<template>
    <u-input v-model="currentValue" v-bind="$attrs"></u-input>
</template>

<script>
import UInput from 'cloud-ui.vusion/src/components/u-input.vue';
import isEmail from 'validator/es/lib/isEmail';
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
            console.log(currentValue, isEmail(currentValue));
            if (currentValue && isEmail(currentValue)) {
                this.$emit('input', currentValue);
            }
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
