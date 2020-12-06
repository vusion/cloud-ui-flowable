<template>
<div>
    <u-region-select v-model="currentValue" v-bind="$attrs" converter="join:-"></u-region-select>
    <u-textarea v-model="address" v-bind="$attrs" placeholder="详细地址" :class="$style.address"></u-textarea>
</div>

</template>

<script>
import URegionSelect from 'cloud-ui.vusion/src/components/u-region-select.vue/index.vue';
import UTextarea from 'cloud-ui.vusion/src/components/u-textarea.vue/index.vue';
export default {
    components: {
        URegionSelect,
        UTextarea,
    },
    props: {
        value: String,
        required: Boolean,
    },
    data() {
        return {
            currentValue: '',
            address: '',
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                if (currentValue && this.address) {
                    this.$emit('input', [currentValue || '', this.address || ''].join(' '));
                    this.$emit('error', null);
                } else {
                    this.$emit('input', '');
                    if (this.required) {
                        this.$emit('error', {
                            type: 'requiredError',
                            message: '此项必填',
                        });
                    }
                }
            },
            immediate: true,
        },
        address: {
            handler(address) {
                if (address && this.currentValue) {
                    this.$emit('input', [this.currentValue || '', address || ''].join(' '));
                    this.$emit('error', null);
                } else {
                    this.$emit('input', '');
                    if (this.required) {
                        this.$emit('error', {
                            type: 'requiredError',
                            message: '此项必填',
                        });
                    }
                }
            },
            immediate: true,
        },
        value: {
            handler(value) {
                value = value || '';
                const [region, ...address] = value.split(' ');
                this.currentValue = region;
                this.address = address.join(' ');
            },
            immediate: true,
        },
    },
};
</script>

<style module>
.root {}
.address {
    margin-top: 10px;
    width: calc(var(--space-base) * 2 + var(--select-width) * 3);
}
</style>
