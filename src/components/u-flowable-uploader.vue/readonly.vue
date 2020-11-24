<template>
    <div>
        <u-copy :value="value">{{ value }}</u-copy>
        <u-link :class="$style.action" :href="value" target="_blank" rel="noopener noreferrer" download>下载</u-link>
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
.action {
    margin-left: 6px;
}
</style>
