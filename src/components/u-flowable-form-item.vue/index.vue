<script>
export const UFlowableFormItem = {
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
    // methods: {
    //     onError(event) {
    //         console.log(event);
    //     },
    // },
    render(h, context) {
        let slot = null;
        if (this.$slots?.default?.length) {
            slot = this.$slots.default[0];
            slot.componentOptions.propsData.mode = this.mode;
            const listeners = slot.componentOptions.listeners = slot.componentOptions.listeners || {};

            listeners.error = (error) => {
                this.error = error;
            };
            listeners.input = (value) => {
                this.value = value;
            };
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
            }, [this.error?.message]),
        ]);
    },
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
}
</style>
