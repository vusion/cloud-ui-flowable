<script>
const UFlowableFormItem = {
    name: 'u-flowable-form-item',
    props: {
        title: String,
        tip: String,
        mode: String,
        required: Boolean,
    },
    data() {
        return {
            error: null,
            value: null,
        };
    },
    render(h, context) {
        let slot = null;
        if (this.$slots?.default?.length) {
            slot = this.$slots.default[0];
            if (slot.componentOptions) {
                slot.componentOptions.propsData.mode = this.mode;
                const listeners = slot.componentOptions.listeners = slot.componentOptions.listeners || {};
                // 显示组件的错误

                const _error = listeners.error;
                listeners.error = (error) => {
                    this.error = error;
                    this.$emit('error', error);
                    _error && _error.bind(this, error)();
                };
                const _input = listeners.input;
                listeners.input = (input) => {
                    this.value = input;
                    this.$emit('input', input);
                    _input && _input.bind(this, input)();
                };
                const _dirty = listeners.dirty;
                listeners.dirty = (dirty) => {
                    console.info('dirty', dirty);
                    this.dirty = dirty;
                    _dirty && _dirty.bind(this, dirty)();
                };
                const _touched = listeners.touched;
                listeners.touched = (touched) => {
                    console.info('touched', touched);
                    this.touched = touched;
                    _touched && _touched.bind(this, touched)();
                };
            }
        }
        return h('div', {
            class: this.$style.root,
        }, [
            h('div', {
                class: this.$style.title,
                attrs: {
                    required: this.required,
                },
            }, [this.$props.title]),
            h('div', {
                class: this.$style.box,
            }, [
                this.$props.tip && h('div', {
                    class: this.$style.tip,
                }, [this.$props.tip]),
                h('div', {
                    class: this.$style.content,
                }, [
                    {
                        ...slot,
                    },
                ]),
                h('div', {
                    class: this.$style.error,
                    attrs: {
                        dirty: this.dirty || this.touched,
                        empty: !this.error?.message,
                        field: this.name,
                        type: 'error',
                    },
                }, [
                    h('div', {
                        class: this.$style.icon,
                    }, []),
                    this.error?.message,
                ]),
            ]),
        ]);
    },
};

export {
    UFlowableFormItem,
};

export default UFlowableFormItem;

</script>
<style module>
.root {
    display: flex;
    padding: 12px;
}

.box {
   flex: 1;
}

.title {
    margin-right: 10px;
    width: 120px;
    font-weight: 500;
    width: 120px;
}
.tip {
    color: #b4b4bc;
    margin-bottom: 10px;
}

.error {
    color: #F24957;
    font-size: 12px;
    margin-top: 5px;
    display: none;
}

.icon {
    display: inline-block;
    margin-right: 5px;
}

.icon:before {
   display: inline-block;
   icon-font: url('cloud-ui.vusion/src/components/i-icon.vue/assets/close-solid.svg');
}

.error[empty] {
    margin-top: 0;
    display: none;
}

.root[dirty] .error,
.error[dirty] {
    display: block;
}

.root[dirty] .error[empty],
.error[empty] {
    margin-top: 0;
    display: none;
}

.title[required]:after {
    content: '*';
    color: #F24957;
    display: inline-block;
    align-items: center;
    margin-left: 5px;
}

</style>
