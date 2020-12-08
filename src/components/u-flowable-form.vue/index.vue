<template>
    <div :class="$style.root">
        <div :class="$style.head">
            <div :class="$style.title">
                {{ title }}
            </div>
            <div :class="$style.tip" v-if="tip">
                {{ tip }}
            </div>
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
        </div>
        <div :class="$style.foot">
            <u-button @click="onSubmit()">{{ buttonText }}</u-button>
        </div>
    </div>
</template>
<script>
import UButton from 'cloud-ui.vusion/src/components/u-button.vue/index.vue';
import ULink from 'cloud-ui.vusion/src/components/u-link.vue/index.vue';
import setPath from 'lodash/set';

const UFlowableForm = {
    components: {
        UButton,
        ULink,
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
    },
    data() {
        return {
            error: null,
            value: null,
            dirty: false,
        };
    },
    // methods: {
    //     onError(event) {
    //         console.log(event);
    //     },
    // },
    methods: {
        getNearVueInstance(el) {
            let vueInstance = el;
            while (vueInstance && !vueInstance.__vue__ && this.$el.contains(el)) {
                vueInstance = vueInstance.parentElement;
            }
            vueInstance = vueInstance.__vue__ ? vueInstance.__vue__ : null;
            console.log(vueInstance);
            while (!vueInstance?.$vnode?.componentOptions?.tag.startsWith('u-flowable')) {
                vueInstance = vueInstance.$parent;
            }
            return vueInstance;
        },
        onSubmit(event) {
            this.dirty = true;
            console.log(this.$refs.form.querySelectorAll('[name]'));
            const formItems = this.$refs.form.querySelectorAll('[name]');
            const map = {};
            const result = {};
            let error = null;
            const valid = [...formItems].every((item) => {
                const name = item.getAttribute('name');
                if (!map[name]) {
                    map[name] = true;
                    const formItem = this.getNearVueInstance(item);
                    if (formItem.$error) {
                        error = formItem.$error;
                        item.scrollIntoView(false);
                        return false;
                    }
                    setPath(result, name, formItem.$currentValue);
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
.head {
    margin-bottom: 12px;
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
    padding: 10px 20px;
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
.content[dirty] [class^=u-flowable-form-item_error]{
    display:block!important;
}
</style>