<template>
<div :class="$style.root">
   <u-uploader v-model="currentValue" v-bind="$attrs">
      <u-button>Upload</u-button>
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
    },
    data() {
        return {
            currentValue: this.formatValue(this.value),
        };
    },
    watch: {
        currentValue(currentValue) {
            this.$emit('input', currentValue);
        },
        value(value) {
            this.currentValue = this.formatValue(value);
        },
    },
    methods: {
        formatValue(value) {
            return value || [];
        },
    },
};
</script>

<style module>
.root {}

</style>
