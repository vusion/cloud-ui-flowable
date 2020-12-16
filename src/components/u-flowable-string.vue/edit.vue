<template>
<div :class="$style.root">
    <u-input v-model="currentValue" placeholder="请输入内容" size="full"></u-input>
</div>
</template>

<script>
import UInput from 'cloud-ui.vusion/src/components/u-input.vue';
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
