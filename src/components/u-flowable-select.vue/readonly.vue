<template>
    <u-text :text="currentValue" :class="$style.root"></u-text>
</template>

<script>
import UText from 'cloud-ui.vusion/src/components/u-text.vue';
export default {
    components: {
        UText,
    },
    props: {
        value: String,
        list: Array,
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    computed: {
        label() {
            return this.list.find((item) => item.value === this.value)?.text || '';
        },
    },
};
</script>

<style module>
.root {
    word-break: break-word;
}

</style>
