<template>
<div :class="$style.root">
    <u-textarea
        :value="currentValue"
        @blur="onBlur($event)"
        resize="vertical"
        :minlength="minlength"
        :maxlength="maxlength"
        placeholder="请输入内容"
        size="medium full"
    >
    </u-textarea>
</div>
</template>

<script>
import UTextarea from 'cloud-ui.vusion/src/components/u-textarea.vue';
export default {
    components: {
        UTextarea,
    },
    props: {
        value: String,
        minlength: String,
        maxlength: String,
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
