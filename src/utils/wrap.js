export default function (component) {
    component.render = function (h) {
        if (this.mode === 'edit') {
            const props = {
                ...this.$props,
                ...this.$attrs,
            };

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
                        // 获取组件通用校验
                        if (props.required) {
                            // 数字格式的时候 0 并不为空
                            if ($event === undefined || $event === null || $event === ''
                                || (Object.prototype.toString.call($event) === '[object Array]') && $event.length === 0) {
                                this.$emit('error', {
                                    type: 'requiredError',
                                    message: '此项必填',
                                });
                            } else {
                                this.$emit('input', $event);
                                this.$emit('error', null);
                            }
                        } else {
                            this.$currentValue = $event;
                            this.$emit('input', $event);
                            this.$emit('error', null);
                        }
                    },
                    error: ($event) => {
                        // 获取组件内置校验错误信息
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
