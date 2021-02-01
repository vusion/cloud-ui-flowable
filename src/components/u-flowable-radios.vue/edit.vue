<template>
<div :class="$style.root" :display="display">
    <u-radios v-model="currentValue">
        <u-radio v-for="(item, index) in list" :key="index" :label="item.value">{{ item.text }}</u-radio>
    </u-radios>
</div>
</template>

<script>
import URadios from 'cloud-ui.vusion/src/components/u-radios.vue';
import URadio from 'cloud-ui.vusion/src/components/u-radios.vue/radio';
export default {
    components: {
        URadios,
        URadio,
    },
    props: {
        value: String,
        display: {
            type: String, default: 'row',
        },
        list: Array,
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                this.$emit('input', currentValue);
            },
            immediate: true,
        },
        value(value) {
            this.currentValue = value;
        },
    },
};
</script>

<style module>
.root {}

.root[display='row'] [class^='u-radios_radio__'] {
    display: inline-block;
}

.root[display='column'] [class^='u-radios_radio__'] {
    display: block;
}

</style>
