<template>
    <div :class="$style.root">
        <div :class="$style.head">
            <div :class="$style.title">
                {{ title }}
            </div>
            <div :class="$style.tip" v-if="tip">
               <u-html :html="tip"></u-html>
            </div>
            <slot name="head"></slot>
            <div :class="$style.files" v-if="files && files.length">
                <div :class="$style.file" v-for="(file, index) in files" :key="index">
                    <div :class="$style.meta">
                        {{ file.name }}
                    </div>
                    <div :class="$style.action">
                        <a download :href="file.url" target="_blank">下载文件</a>
                    </div>
                </div>
            </div>
        </div>
        <div :class="$style.content" :dirty="dirty">
            <form ref="form">
                <slot></slot>
            </form>
            <div :class="$style.clear"></div>
        </div>
        <div :class="$style.foot" v-if="mode === 'edit' || $slots.foot || $scopedSlots.foot">
            <slot name="foot" :submit="onSubmit.bind(this)"></slot>
            <u-button @click="onSubmit()" color="primary" v-if="mode === 'edit' && !hideButton">{{ buttonText }}</u-button>
        </div>
    </div>
</template>
<script>
import UButton from 'cloud-ui.vusion/src/components/u-button.vue/index.vue';
import ULink from 'cloud-ui.vusion/src/components/u-link.vue/index.vue';
import UHtml from 'cloud-ui.vusion/src/components/u-html.vue';
import setPath from 'lodash/set';

const UFlowableForm = {
    components: {
        UButton,
        ULink,
        UHtml,
    },
    name: 'u-flowable-form',
    props: {
        title: {
            type: String,
            default: '表单',
        },
        tip: String,
        files: Array,
        buttonText: {
            type: String,
            default: '提交',
        },
        mode: {
            type: String,
            default: 'edit',
        },
        hideButton: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        this.$emit('mounted');
    },
    data() {
        return {
            error: null,
            value: null,
            dirty: false,
        };
    },
    methods: {
        getNearVueInstance(el) {
            let vueInstance = el;
            const hasOwnProperty = Object.prototype.hasOwnProperty;
            while (vueInstance && !vueInstance.__vue__ && this.$el.contains(el)) {
                if (vueInstance.hasAttribute('no-collect-name')) {
                    return null;
                }
                vueInstance = vueInstance.parentElement;
            }
            vueInstance = vueInstance.__vue__ ? vueInstance.__vue__ : null;
            while (!vueInstance?.$vnode?.componentOptions?.tag.startsWith('u-flowable')) {
                if (hasOwnProperty.call(vueInstance.$attrs, 'no-collect-name')) {
                    return null;
                }
                vueInstance = vueInstance.$parent;
            }
            return vueInstance;
        },
        onSubmit(event) {
            this.$emit('dirty', true);
            const formItems = this.$refs.form.querySelectorAll('[name]');
            const map = {};
            const result = {};
            let error = null;
            // 表单提交触发所有元素被操作
            const errorItem = this.$refs.form.querySelectorAll('[type=error]');
            [...errorItem].every((item) => {
                item.setAttribute('dirty', true);
                return true;
            });

            const valid = [...formItems].every((item) => {
                const name = item.getAttribute('name');
                const filterName = item.getAttribute(':vusion-filter-name');
                if (!map[name]) {
                    map[name] = true;
                    const formItem = this.getNearVueInstance(item);
                    if (formItem && !filterName) {
                        if (formItem.$error) {
                            error = formItem.$error;
                            item.scrollIntoView(false);
                            return false;
                        }
                        // 只提交编辑模式的 key，只读模式的空值过滤掉
                        if (formItem.mode === 'edit') {
                            const currentValue = formItem.$currentValue;
                            setPath(result, name, currentValue);
                        }
                    }
                }
                return true;
            });

            if (valid) {
                console.info('result', result);
                this.$emit('submit', result);
            } else {
                this.$emit('error', error);
            }
        },
    },
};

export {
    UFlowableForm,
};

export default UFlowableForm;

</script>
<style module>
.root {
    position: relative;
}

.clear {
    clear: both;
}

.head {
    margin-bottom: 12px;
    word-break: break-word;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    background: #fff;
    border-radius: 10px;
}
.title {
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
}
.tip {
    padding: 0 20px;
    word-break: break-word;
    overflow: hidden;
}
.content {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    background: #fff;
    border-radius: 10px;
    padding: 12px;
}
.foot {
    position: relative;
    padding: 14px 0;
    margin-top: 12px;
    background: #fff;
    text-align: center;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    border-radius: 10px;
}
.files {
        padding: 10px 20px;
}
.file {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 40px;
    background-color: #f5f5f7;
    border-radius: 3px;
    margin-bottom: 4px;
    cursor: pointer;
}

</style>
