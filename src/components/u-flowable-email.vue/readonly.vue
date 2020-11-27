<template>
    <div>
        <u-input readonly v-bind="[$attrs, $props]"></u-input>
    </div>
</template>

<script>
import UText from 'cloud-ui.vusion/src/components/u-text.vue';
import UCopy from 'cloud-ui.vusion/src/components/u-copy.vue/index.vue';
export default {
    components: {
        UText,
        UCopy,
    },
    props: {
        value: String,
    },
};
</script>

<style module>
.root {}

</style>
