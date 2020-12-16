<template>
<div :class="$style.root">
   <u-uploader
        v-model="currentValue"
        v-bind="$attrs"
        @success="onSuccess($event)"
        @error="onError($event)"
        @remove="onRemove($event)">
      <u-button>上传</u-button>
   </u-uploader>
</div>
</template>

<script>
import UUploader from 'cloud-ui.vusion/src/components/u-uploader.vue/index.vue';
export default {
    components: {
        UUploader,
    },
    props: {
        value: Array,
        maxSize: Number,
        count: Number,
        fileType: String,
        multiple: { default: true, type: Boolean },
        urlField: { default: 'result', type: String },
        url: { default: '/api/v1/bucket/upload', type: String },
    },
    data() {
        return {
            currentValue: this.formatValue(this.value),
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
            this.currentValue = this.formatValue(value);
        },
    },
    methods: {
        onSuccess($event) {
            const item = $event.item;
            if (this.currentValue?.length > 0) {
                const indexValue = this.currentValue.findIndex((v) => (v.name === item?.name));
                // 去重
                if (indexValue > -1) {
                    this.currentValue.splice(indexValue);
                }
                this.currentValue.push(item);
            } else {
                this.currentValue = [item];
            }
            this.$emit('input', this.currentValue);
        },
        onError($event) {
            this.$emit('input', $event);
        },
        onRemove($event) {
            this.$emit('input', $event);
        },
        formatValue(value) {
            if (this.currentValue && JSON.stringify(value) === JSON.stringify(this.currentValue)) {
                return this.currentValue;
            }

            return value || [];
        },
    },
};
</script>

<style module>
.root {}

</style>
