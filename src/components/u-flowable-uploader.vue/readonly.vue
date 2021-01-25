<template>
   <div :class="$style.root">
        <template v-for="(item, index) in value">
           <div :key="index">
              <u-copy :value="item.name">{{ item.name }}</u-copy>
              <u-link :class="$style.action" :href="item.url" target="_blank" rel="noopener noreferrer" download>下载</u-link>
            </div>
        </template>
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
        value: Array,
    },
};
</script>

<style module>
.root {
    word-break: break-all;
}
.action {
    margin-left: 6px;
}
</style>
