<template>
     <u-input v-bind="[$props, $attrs]" readonly></u-input>
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
.readOnlyContent {
  position: relative;
}
.mask {
    display: flex;
    position: absolute;
    z-index: 1000;
    top: 0;
    bottom: 0;
    width: 100%;
    cursor: move;
}
</style>
