<template>
<div :class="$style.root">
    <u-checkboxes v-model="currentValue" :min="min" :max="max" v-bind="$attrs" :class="$style.checkboxes">
        <template v-for="(item, index) in list">
            <div :key="index" :class="$style.checkbox">
                <u-image :src="getCurrentImage(item)" fit="fill" :class="$style.image"></u-image>
                <div :class="$style.desc">
                    <u-checkbox :label="item.text" v-model="item.value" @input="updateValue" :key="index">
                        {{ item.text }}
                    </u-checkbox>
                </div>
            </div>
        </template>
    </u-checkboxes>
</div>
</template>

<script>
import UCheckboxes from 'cloud-ui.vusion/src/components/u-checkboxes.vue/index.vue';
import UCheckbox from 'cloud-ui.vusion/src/components/u-checkbox.vue/index.vue';
import UImage from 'cloud-ui.vusion/src/components/u-image.vue/index.vue';
export default {
    components: {
        UCheckboxes,
        UCheckbox,
        UImage,
    },
    props: {
        value: Array,
        list: Array,
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
    },
    data() {
        return {
            currentValue: this.splitValue(this.value),
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
            this.currentValue = this.splitValue(value);
        },
    },
    methods: {
        updateValue() {
            const result = [];
            (this.list || []).forEach((item) => {
                if (item.value === true) {
                    result.push(item.text);
                }
            });
            this.currentValue = result;
        },
        getCurrentImage(item) {
            if (item.files?.[0]) {
                return item.files[0].url;
            }
            return item?.image;
        },
        splitValue(value) {
            if (Object.prototype.toString.call(value) === '[object Array]') {
                return value || [];
            } else {
                return (value || '').split(',').filter((i) => i);
            }
        },
    },
};
</script>

<style module>
.root {
   position: relative;
}
.checkbox {
    display: inline-block;
    vertical-align: top;
    width: calc((100% - 20px * 4) / 4);
    margin: 0 10px!important;
}

.image {
    width: 100%;
    height: 160px;
}
.desc {

}

</style>
