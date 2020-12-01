<template>
<u-text :text="value.join(',')"></u-text>
</template>

<script>
import UText from 'cloud-ui.vusion/src/components/u-text.vue';
export default {
    components: {
        UText,
    },
    props: {
        value: Array,
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
            // TODO
            const map = {};
            this.list.forEach((item) => {
                map[item.key] = item;
            });

            let valueArray = value;
            if (Object.prototype.toString.call(value) === '[object Array]') {
                valueArray = value;
            } else {
                valueArray = (value || '').split(',');
            }

            return valueArray.map((valueItem) => this.list.find((item) => item.key === valueItem)).map((item) => item.text);
        },
    },
};
</script>

<style module>
.root {}

</style>
