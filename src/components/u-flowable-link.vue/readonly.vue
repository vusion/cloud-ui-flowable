<template>
    <div>
        {{ value }} <u-link :href="value" target="_blank" rel="noopener noreferrer">访问</u-link> <u-copy :value="value"></u-copy>
    </div>
</template>

<script>
import ULink from 'cloud-ui.vusion/src/components/u-link.vue/index.vue';
import UCopy from 'cloud-ui.vusion/src/components/u-copy.vue/index.vue';
export default {
    components: {
        ULink,
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
