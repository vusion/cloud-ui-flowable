<script>
import { UFormTableView, UFormTableViewColumn } from 'cloud-ui.vusion/src/components/u-form-table-view.vue';

export default {
    name: 'u-flowable-table',
    components: {
        UFormTableView,
        UFormTableViewColumn,
    },
    props: {
        value: Array,
        dynamic: {
            type: Boolean,
            default: true,
        },
        minCount: { type: Number, default: 1 },
        maxCount: { type: Number, default: 10 },
    },
    data() {
        return {
            currentValue: this.formatValue(this.value),
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                this.$emit('input', currentValue);
            },
            immediate: true,
        },
        value(value) {
            this.currentValue = this.formatValue(value);
        },
    },
    methods: {
        formatValue(value) {
            if (this.currentValue && JSON.stringify(value) === JSON.stringify(this.currentValue)) {
                return this.currentValue;
            }

            return value || [];
        },
    },
    render(h) {
        const children = this.$slots.default || [];
        const name = this.$attrs.name;
        const nameList = children.map((item) => {
            if (!item.tag) {
                return undefined;
            }
            const name = item.componentOptions.propsData.name;
            return name.includes('.') ? name.split('.').pop() : name;
        }).filter((i) => i);
        const self = this;
        return h('div', {
            class: this.$style.root,
        }, [
            h('u-form-table-view', {
                props: {
                    data: this.currentValue,
                    dynamic: this.dynamic && (this.$attrs.mode !== 'readonly'),
                    minCount: this.minCount,
                    maxCount: this.maxCount,
                    getDefaultItem: () => {
                        const map = {};
                        nameList.forEach((key) => {
                            map[key] = null;
                        });
                        return map;
                    },
                },
            }, children.map((item) =>
                item.tag && h('u-form-table-view-column', {
                    props: {
                        title: item.data.attrs.title,
                    },
                    scopedSlots: {
                        cell({ rowIndex, item: cellItem }) {
                            const formItem = {
                                ...item,
                            };

                            formItem.componentOptions = {
                                ...formItem.componentOptions,
                            };
                            console.info('formItem abc', formItem);
                            formItem.componentOptions.propsData = {
                                ...formItem.componentOptions.propsData,
                            };
                            const listeners = formItem.componentOptions.listeners = {
                                ...formItem.componentOptions.listeners,
                            };
                            console.info(listeners);
                            const _error = listeners.error;
                            listeners.error = (error) => {
                                self.error = error;
                                if (error?.message) {
                                    error.message = `${item.data.attrs.title} ：${error?.message}`;
                                }

                                self.$emit('error', error);
                                _error && _error.bind(self, error)();
                            };
                            const _input = listeners.input;
                            listeners.input = (input) => {
                                self.$emit('input', self.currentValue);
                                _input && _input.bind(self, input)();
                            };
                            const _dirty = listeners.dirty;
                            listeners.dirty = (dirty) => {
                                console.info('dirty', dirty);
                                self.dirty = dirty;
                                _dirty && _dirty.bind(self, dirty)();
                            };
                            const _touched = listeners.touched;
                            listeners.touched = (touched) => {
                                console.info('touched', touched);
                                self.touched = touched;
                                _touched && _touched.bind(self, touched)();
                            };
                            const propsData = formItem.componentOptions.propsData;
                            formItem.componentOptions.propsData = formItem.componentOptions.propsData || {};
                            if (self.$attrs.mode === 'readonly') {
                                propsData.mode = 'readonly';
                            }

                            let baseName = propsData.name;
                            // 说明已经被重新设置了
                            if (baseName.includes('.')) {
                                baseName = baseName.split('.').pop();
                            }

                            propsData.name = `${name}.${rowIndex}.${baseName}`;

                            // 纯展示组件，不需要被重新赋值
                            if (formItem.componentOptions.tag === 'u-flowable-text') {
                                return formItem;
                            }

                            if ('value' in propsData && cellItem[baseName] === null) {
                                return formItem;
                            }

                            propsData.value = cellItem[baseName];
                            return formItem;
                        },
                    },
                }),
            ).filter((i) => i)),
        ]);
    },
};
</script>

<style module>
.root {
   position: relative;
   width: 580px;
   border: 1px solid var(--border-color-base);
}

/* 表头背景色 */
.root [class^=u-form-table] thead tr {
    background: #f4f6f9;
}

/* 表格的初始化内容 */
.root [class^=u-form-table-view] {
    overflow-x: scroll;
    overflow-y: hidden;
}

.root [class^=u-form-table] {
    width: initial;
}

.root [class^=u-form-table-view_row] td {
   min-width: 200px;
   padding: 10px;
}

.root tbody tr:not(:last-child) {
   border-bottom: 1px solid var(--border-color-base);
}

.root [class^=u-form-table-view_row] td[class^=u-form-table-view_row_last-column] {
   display: none;
}

.root [class^=u-form-table-view_row] td [class^=u-flowable-image-select_readonly_checkbox] {
   display: flex;
   width: initial;
}

.root [class^=u-form-table-view_row] td [class^=u-flowable-image-select_readonly_checkbox] [class^=u-image] {
   width: 20px;
   height: 20px;
   margin-right: 10px;
}

</style>
