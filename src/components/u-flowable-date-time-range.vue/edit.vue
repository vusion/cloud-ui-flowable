<template>
<div :class="$style.root">
    <template v-if="dateType === 'date'">
        <u-date-picker :class="$style.item" placeholder="开始时间" v-bind="$attrs" :date.sync="currentValue.startTime" :max-date="endTime"></u-date-picker>
        <div :class="$style.separator">至</div>
        <u-date-picker :class="$style.item" placeholder="结束时间" v-bind="$attrs" :date.sync="currentValue.endTime" :min-date="startTime"></u-date-picker>
    </template>
    <template v-else-if="dateType === 'datetime'">
        <u-date-time-picker :class="$style.item" placeholder="开始时间" v-bind="$attrs" :date.sync="currentValue.startTime" :max-date="endTime"></u-date-time-picker>
         <div :class="$style.separator">至</div>
        <u-date-time-picker :class="$style.item" placeholder="结束时间" v-bind="$attrs" :date.sync="currentValue.endTime" :min-date="startTime"></u-date-time-picker>
    </template>
</div>

</template>

<script>
import UDatePicker from 'cloud-ui.vusion/src/components/u-date-picker.vue/index.vue';
import UDateTimePicker from 'cloud-ui.vusion/src/components/u-date-time-picker.vue/index.vue';
export default {
    components: {
        UDatePicker,
        UDateTimePicker,
    },
    props: {
        value: String,
        dateType: {
            type: String,
            default: 'date',
        },
    },
    data() {
        return {
            currentValue: this.splitValue(this.value),
            startTime: undefined,
            endTime: undefined,
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                if (currentValue.startTime && currentValue.endTime) {
                    this.$emit('input', [this.currentValue.startTime, this.currentValue.endTime].join('~'));
                }
                if (currentValue.startTime) {
                    this.startTime = new Date(currentValue.startTime);
                }
                if (currentValue.endTime) {
                    this.endTime = new Date(currentValue.endTime);
                }
            },
            deep: true,
            immediate: true,
        },
        value(value) {
            this.currentValue = this.splitValue(value);
        },
    },
    methods: {
        splitValue(value) {
            if ([this.currentValue?.startTime || '', this.currentValue?.endTime || ''].join('~') === value) {
                return this.currentValue;
            }
            const [startTime, endTime] = (value || '').split('~').map((i) => i);
            console.info(startTime, endTime);
            return {
                startTime,
                endTime,
            };
        },
    },
};
</script>

<style module>
.root {}
.separator {
    display: inline-block;
    width: 40px;
    text-align: center;
}
.item {
    display: inline-block;
    width: calc((100% - 40px) / 2);
}
.item input {
    width: 100%!important;
}
</style>
