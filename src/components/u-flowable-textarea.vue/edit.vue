<template>
<div :class="$style.root">
    <u-textarea v-model="currentValue" resize="vertical"  placeholder="请输入内容" size="medium full"></u-textarea>
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
