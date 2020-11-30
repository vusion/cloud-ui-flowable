<template>
    <u-checkboxes v-model="currentValue" :min="min" :max="max" v-bind="$attrs" :class="$style.checkboxes">
        <template v-for="(item, index) in list">
            <div :key="index" :class="$style.checkbox">
                <u-image :src="item.image" fit="fill" :class="$style.image"></u-image>
                <div :class="$style.desc">
                    <u-checkbox :label="item.text" v-model="item.value" :key="index">
                        {{ item.text }}
                    </u-checkbox>
                </div>
            </div>
        </template>
    </u-checkboxes>
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
        value: String,
        list: Array,
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
    },
    data() {
        return {
            currentValue: this.splitValue(),
        };
    },
    watch: {
        currentValue(currentValue) {
            this.$emit('input', currentValue);
        },
        list() {
            this.currentValue = this.splitValue();
        },
    },
    methods: {
        splitValue() {
            const result = [];
            (this.list || []).forEach((item) => {
                if (item.value) {
                    result.push(item.text);
                }
            });
            return result;
        },
    },
};
</script>

<style module>

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
