<template>
<div :class="$style.root">
    <u-html :html="value"></u-html>
</div>
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
.root {
    /* 处理文本溢出的问题 */
    word-break: break-word
}

.root img {
    max-width: 100%!important;
    height: auto!important;
}

</style>
