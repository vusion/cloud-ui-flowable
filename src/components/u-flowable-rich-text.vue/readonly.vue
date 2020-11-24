<template>
    <u-html :html="value"></u-html>
</template>

<script>
import UHtml from 'cloud-ui.vusion/src/components/u-html.vue';
export default {
    components: {
        UHtml,
    },
    props: {
        value: String,
    },
};
</script>

<style module>
.root {}

</style>
