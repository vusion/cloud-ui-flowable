<template>
    <u-text :text="showText"></u-text>
</template>

<script>
import UText from 'cloud-ui.vusion/src/components/u-text.vue';
export default {
    components: {
        UText,
    },
    props: {
        value: Number,

        point: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        showText() {
            return this.value.toFixed(this.point);
        },
    },
};
</script>

<style module>
.root {}

</style>
