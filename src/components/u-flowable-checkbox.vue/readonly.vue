<template>
<u-text :text="selectedList.join(',')"></u-text>
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
            selectedList: this.getSelectedList(this.value),
        };
    },
    watch: {
        value(value) {
            this.selectedList = this.getSelectedList(value);
        },
    },
    methods: {
        getSelectedList(value) {
            const map = {};
            this.list.forEach((item) => {
                map[item.key] = item;
            });
            return (value || '').split(',').map((valueItem) => this.list.find((item) => item.key === valueItem)).map((item) => item.label);
        },
    },
};
</script>

<style module>
.root {}

</style>
