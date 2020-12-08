<template>
<div :class="$style.root">
    <u-textarea v-model="currentValue" resize="vertical" v-bind="$attrs" size="medium full"></u-textarea>
</div>
</template>

<script>
import UTextarea from 'cloud-ui.vusion/src/components/u-textarea.vue';
export default {
    components: {
        UTextarea,
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
