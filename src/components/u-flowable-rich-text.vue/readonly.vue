<template>
<div :class="$style.root">
    <u-html :html="value"></u-html>

</div>
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
.root img {
    max-width: 100%!important;
    height: auto!important;
}
</style>
