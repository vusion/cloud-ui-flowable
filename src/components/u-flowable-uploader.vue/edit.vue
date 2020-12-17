<template>
<div :class="$style.root">
   <u-uploader
        :value="currentValue"
        :maxSize="maxSize"
        :count="count"
        :fileType="fileType"
        :multiple="multiple"
        :urlField="urlField"
        :url="url"
        @success="onSuccess($event)"
        @error="onError($event)"
    >
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
            this.$emit('input', this.currentValue);
        },
        onError($event) {
            // error 去掉失败的结果
            const result = this.currentValue.filter((item) => (item.status === 'success'));
            if (this.currentValue && JSON.stringify(result) === JSON.stringify(this.currentValue)) {
                this.currentValue = result;
            }
            this.$emit('input', result);
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
/* 避免遮挡其他元素 */
.root input[type=file]{
    display: block;
    left: 0;
    height: 40px;
    font-size: 0;
}

</style>
