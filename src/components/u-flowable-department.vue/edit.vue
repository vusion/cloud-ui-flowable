<template>
<div :class="$style.root">
    <u-select size="full" multiple filterable clearable :value="currentValue" @select="onSelect($event)" :data-source="list"></u-select>
</div>
</template>

<script>
import USelect from 'cloud-ui.vusion/src/components/u-select.vue';
export default {
    components: {
        USelect,
    },
    props: {
        value: String,
        load: Function,
    },
    data() {
        return {
            list: null,
            currentValue: this.format(this.value),
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                this.$emit('input', (currentValue || []).join(','));
            },
            immediate: true,
        },
        value(value) {
            if ((value || '') === (this.currentValue || []).join(',')) {
                return;
            }
            this.currentValue = this.format(value);
        },
    },
    created() {
        this.loadList();
    },
    methods: {
        onSelect({ value }) {
            this.currentValue = value;
        },
        format(value) {
            return (value || '').split(',');
        },
        loadList() {
            this.list = null;
            this.load().then((list) => {
                this.list = list;
            });
        },
    },
};
</script>

<style module>
.root {
   position: relative;
}
</style>
