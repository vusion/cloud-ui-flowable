<template>
     <u-textarea resize="vertical" readonly v-bind="[$props, $attrs]"></u-textarea>
</template>

<script>
import UText from 'cloud-ui.vusion/src/components/u-text.vue';
export default {
    components: {
        UText,
    },
    props: {
        value: String,
    },
};
</script>

<style module>
.root {}

</style>
