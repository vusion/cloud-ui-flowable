<template>
<div :class="$style.root">
    <u-date-picker alignment="left" :class="$style.ctrl" :date.sync="currentValue" v-bind="$attrs" v-if="dateType === 'date'"></u-date-picker>
    <u-date-time-picker alignment="left" :class="$style.ctrl" :date.sync="currentValue" v-bind="$attrs" v-else-if="dateType === 'datetime'"></u-date-time-picker>
</div>
</template>

<script>
import UDatePicker from 'cloud-ui.vusion/src/components/u-date-picker.vue';
import UDateTimePicker from 'cloud-ui.vusion/src/components/u-date-time-picker.vue';
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
            currentValue: this.value,
        };
    },
    watch: {
        currentValue(currentValue) {
            this.$emit('input', currentValue);
        },
        value(value) {
            this.currentValue = value;
        },
    },
};
</script>

<style module>
.root {
    
}
.ctrl {
    position: relative;
    display: block!important;
    width: 100%!important;
}
.ctrl input{
    width: 100%!important;
}

</style>
