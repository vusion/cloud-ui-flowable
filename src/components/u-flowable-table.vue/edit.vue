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
        maxCount: { type: Number, default: 99 },
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
                            const _error = listeners.error;
                            listeners.error = (error) => {
                                self.error = error;
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
   padding: 10px 0 50px 10px;
   border: 1px solid var(--border-color-base);
}

/* 表格的初始化内容 */
.root [class^=u-form-table-view] {
    overflow: scroll;
}

.root [class^=u-form-table] {
    width: initial;
}

.root [class^=u-form-table-view_last-column] {
    width: 5px;
    padding: 0;
}

.root [class^=u-form-table_remove-button] {
    height: 20px;
    line-height: 20px;
    font-size: 24px;
}

.root [class^=u-form-table_add-button] {
    margin-bottom: 40px;
    position: absolute;
}

.item {
    min-width: 200px;
}

/* 调整表格内部元素的样式 */
.root [class^=u-form-table-view_row] [class^=u-flowable-string][vusion-style-root=true],
.root [class^=u-form-table-view_row] [class^=u-flowable-select][vusion-style-root=true],
.root [class^=u-form-table-view_row] [class^=u-flowable-user][vusion-style-root=true],
.root [class^=u-form-table-view_row] [class^=u-flowable-department][vusion-style-root=true],
.root [class^=u-form-table-view_row] [class^=u-flowable-rich-text][vusion-style-root=true],
.root [class^=u-form-table-view_row] [class^=u-flowable-image-select][vusion-style-root=true],
.root [class^=u-form-table-view_row] [class^=u-flowable-rich-text][vusion-style-root=true] {
    min-width: 200px;
}

/* 调整表格内部单选组件的样式 */
.root [class^=u-form-table-view_row] [class^=u-flowable-checkbox][vusion-style-root=true]
[class^=u-checkboxes] {
    display: flex;
    flex-direction: column;
    min-width: 200px;
}

/* 调整表格内部多选组件的样式 */
.root [class^=u-form-table-view_row] [class^=u-flowable-radios][vusion-style-root=true]
> [class^=u-radios] { /* 避免修改到 u-radios_radio 的样式 */
    display: flex;
    flex-direction: column;
    min-width: 200px;
}

/* 调整表格内部图片组件的样式 */
.root [class^=u-form-table-view_row] [class^=u-flowable-image-select][vusion-style-root=true]
[class^=u-checkboxes] {
    display: flex;
    flex-direction: column;
}

.root [class^=u-form-table-view_row] [class^=u-flowable-image-select][vusion-style-root=true]
[class^=u-flowable-image-select_edit_checkbox] {
    display: flex;
    width: 100%;
}

.root [class^=u-form-table-view_row] [class^=u-flowable-image-select][vusion-style-root=true]
[class^=u-image] {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.root [class^=u-form-table-view_row] [class^=u-flowable-text][vusion-style-root=true],
.root [class^=u-form-table-view_row] [class^=u-flowable-uploader][vusion-style-root=true] {
    min-width: 100px;
}

.root [class^=u-form-table-view_row] [class^=u-flowable-date-time-range][vusion-style-root=true],
.root [class^=u-form-table-view_row] [class^=u-flowable-address][vusion-style-root=true] {
    min-width: 400px
}

</style>
