<template>
<div :class="$style.root">
    <u-input
        :value="currentValue"
        :minlength="minlength"
        :maxlength="maxlength"
        @blur="onBlur($event)"
        placeholder="请输入内容"
        size="full">
    </u-input>
</div>
</template>

<script>
import UInput from 'cloud-ui.vusion/src/components/u-input.vue';
export default {
    components: {
        UInput,
    },
    props: {
        value: String,
        maxlength: String,
        minlength: String,
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                const minlength = Number(this.minlength);
                if (Number(this.minlength) > 0) {
                    if (currentValue.length < minlength) {
                        // 能显示出错误
                        this.$emit('touched', true);
                        this.$emit('error', {
                            type: 'FormatError',
                            message: `长度至少为 ${minlength} 个字符`,
                        });
                    } else {
                        this.$emit('error', null);
                        this.$emit('input', currentValue);
                    }
                } else {
                    this.$emit('error', null);
                    this.$emit('input', currentValue);
                }
            },
            immediate: true,
        },
        value(value) {
            this.currentValue = value;
        },
    },
    methods: {
        onBlur($event) {
            this.currentValue = $event.target.value;
        },
    },
};
</script>

<style module>
.root {}

</style>
