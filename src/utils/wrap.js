export default function (component) {
    component.mounted = function () {
        this.$emit('mounted');
    };
    component.render = function (h) {
        const props = {
            ...this.$props,
            ...this.$attrs,
        };
        Object.keys(props).forEach((key) => {
            if (key.startsWith('vusion-')) {
                delete props[key];
            }
        });
        if (this.mode === 'edit') {
            return h('edit', {
                props,
                attrs: props,
                on: {
                    touched: ($event) => {
                        this.$emit('touched', $event);
                    },

                    input: ($event) => {
                        // 获取组件通用校验
                        if (props.required) {
                            // 数字格式的时候 0 并不为空
                            if ($event === undefined || $event === null || $event === ''
                                || (Object.prototype.toString.call($event) === '[object Array]') && $event.length === 0) {
                                const error = this.$error = {
                                    type: 'requiredError',
                                    message: '此项必填',
                                };
                                this.$emit('error', error);
                                this.setCorrectValue(undefined);
                            } else {
                                // 验证通过
                                this.$currentValue = $event;
                                this.$error = null;
                                this.setCorrectValue($event);
                                this.$emit('input', $event);
                                this.$emit('error', null);
                            }
                        } else {
                            // 没开启通用验证
                            this.$currentValue = $event;
                            this.setCorrectValue($event);
                            this.$error = null;
                            this.$emit('input', $event);
                            this.$emit('error', null);
                        }
                    },
                    error: ($event) => {
                        // 获取组件内置校验错误信息
                        console.info('error $event', $event);
                        if ($event) {
                            this.setCorrectValue(undefined);
                        }
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
                props,
                attrs: props,
            }, this.$slots.default);
        }
    };
    component.props = component.props || {};
    component.props.mode = {
        type: String,
        default: 'edit',
    };
    component.props.collect = {
        type: Object,
    };
    component.props.name = String;
    component.data = function () {
        return {
            $error: null,
            $currentValue: null,
        };
    };
    component.methods = component.methods || {};
    const beforeDestroy = component.beforeDestroy;
    component.beforeDestroy = function (...args) {
        this.clearValue();
        if (beforeDestroy) {
            beforeDestroy.bind(this).call(...args);
        }
    };
    Object.assign(component.methods, {
        clearValue() {
            if (this.collect && this.name) {
                const nameList = this.name.split('.');
                let root = this.collect;
                // 临时解决方案
                nameList.every((name, index) => {
                    if (index === nameList.length - 1) {
                        this.$delete(root, name);
                    } else {
                        if (root[name]) {
                            root = root[name];
                        } else {
                            return false;
                        }
                    }
                    return true;
                });
            }
        },
        setCorrectValue(value) {
            if (this.collect && this.name) {
                const nameList = this.name.split('.');
                let root = this.collect;
                // 临时解决方案
                nameList.forEach((name, index) => {
                    if (index === nameList.length - 1) {
                        this.$set(root, name, value);
                    } else {
                        this.$set(root, name, root[name] || {});
                    }
                    root = root[name];
                });
            }
        },
    });

    return component;
}
