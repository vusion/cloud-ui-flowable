<template>
<div :class="$style.root">
    <u-region-select :class="$style.select" v-model="currentValue" converter="join:-"></u-region-select>
    <u-textarea :value="address" @blur="onBlur($event)" :class="$style.address" placeholder="详细地址" size="medium full"></u-textarea>
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
                // 地址需要同时校验 address 和 currentValue
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
    methods: {
        onBlur($event) {
            this.$emit('touched', true);
            this.address = $event.target.value;
        },
    },
};
</script>

<style module>
.root {}
.select [class^=u-select][tabindex="0"] {
    width: calc((100% - var(--space-small) * 2) / 3);
}
.address {
    margin-top: 10px;
}
</style>
