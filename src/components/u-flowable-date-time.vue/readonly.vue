<template>
    <u-date-picker alignment="left" :class="$style.root" readonly v-bind="[$attrs, $props]" v-if="type === 'date'"></u-date-picker>
    <u-date-time-picker alignment="left" :class="$style.root" readonly v-bind="[$attrs, $props]" v-else-if="type === 'datetime'"></u-date-time-picker>
</template>

<script>
import UText from 'cloud-ui.vusion/src/components/u-text.vue';
export default {
    components: {
        UText,
    },
    props: {
        value: String,
        type: {
            type: String,
            default: 'date',
        },
    },
};
</script>

<style module>
.root {}

</style>
