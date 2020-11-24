export default function (component) {
    component.render = function (h) {
        if (this.mode === 'edit') {
            return h('edit', {
                props: {
                    ...this.$props,
                    ...this.$attrs,
                },
                attrs: this.$attrs,
                on: {
                    input: ($event) => {
                        this.$emit('input', $event);
                    },
                    error: ($event) => {
                        this.$emit('error', $event);
                    },
                },
            });
        } else if (this.mode === 'readonly') {
            if (!this.$props.value) {
                return h('div', ['暂无数据']);
            }
            return h('readonly', {
                props: {
                    ...this.$props,
                    ...this.$attrs,
                },
                attrs: this.$attrs,
            });
        }
    };
    if (component.pro)
        component.props = component.props || {};
    component.props.mode = String;

    return component;
}
