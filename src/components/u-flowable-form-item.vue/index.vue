<script>
const UFlowableFormItem = {
    name: 'u-flowable-form-item',
    props: {
        title: String,
        tip: String,
        mode: String,
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
                listeners.error = (error) => {
                    this.error = error;
                };
                listeners.input = (input) => {
                    this.value = input;
                };
                listeners.dirty = (dirty) => {
                    console.info('dirty', dirty);
                    this.dirty = dirty;
                };
                listeners.touched = (touched) => {
                    console.info('touched', touched);
                    this.touched = touched;
                };
            }
        }
        return h('div', {
            class: this.$style.root,
        }, [
            h('div', {
                class: this.$style.title,
            }, [this.$props.title]),
            h('div', {
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
                },
            }, [this.error?.message]),
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
    padding: 12px;
}
.title {
    padding: 0 0 8px;
    font-weight: 500;
}
.tip {
    margin-bottom: 8px;
    color: #b4b4bc;
}
.error {
    color: #f5222d;
    margin-top: 5px;
    display: none;
}
.error[dirty] {
    display: block;
}
</style>
