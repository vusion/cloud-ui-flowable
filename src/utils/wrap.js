export default function (component) {
    component.render = function (h) {
        if (this.mode === 'edit') {
            return h('edit', {
                props: {
                    ...this.$props,
                    ...this.$attrs,
                },
                attrs: {
                    ...this.$props,
                    ...this.$attrs,
                },
                on: {
                    input: ($event) => {
                        this.$currentValue = $event;
                        this.$emit('input', $event);
                    },
                    error: ($event) => {
                        this.$error = $event;
                        this.$emit('error', $event);
                    },
                },
            }, this.$slots.default);
        } else if (this.mode === 'readonly') {
            if (!this.$props.value
                || (Object.prototype.toString.call(this.$props.value) === '[object Array]') && this.$props.value.length === 0) {
                return h('div', ['暂无数据']);
            }
            return h('readonly', {
                props: {
                    ...this.$props,
                    ...this.$attrs,
                },
                attrs: {
                    ...this.$props,
                    ...this.$attrs,
                },
            }, this.$slots.default);
        }
    };
    component.props = component.props || {};
    component.props.mode = {
        type: String,
        default: 'edit',
    };
    component.props.name = String;
    component.data = function () {
        return {

            $error: null,
            $currentValue: null,
        };
    };

    return component;
}
