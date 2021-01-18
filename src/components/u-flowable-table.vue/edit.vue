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
            class: [this.$style.root, children.length <= 2 && this.$style.short],

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
                            formItem.componentOptions.propsData = {
                                ...formItem.componentOptions.propsData,
                            };
                            const listeners = formItem.componentOptions.listeners = {
                                ...formItem.componentOptions.listeners,
                            };
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

.short [class^=u-form-table] {
    min-width: 100%;
}

.root[mode='edit'] {
   position: relative;
   width: 580px;
   padding-bottom: 20px;
}

/* 只选择表格的最外层的元素样式 */
.root[mode='edit'] > [class^=u-form-table-view] {
    overflow-x: scroll;
    overflow-y: hidden;
    border: var(--button-border-width) solid var(--button-border-color);
    border-radius: var(--button-border-radius);
}

.root[mode='edit'] [class^=u-form-table] {
    width: initial;
    position: initial;
}

/* 表头背景色 */
.root[mode='edit'] [class^=u-form-table] thead tr {
    background: #f4f6f9;
}

.root[mode='edit'] [class^=u-form-table] thead tr th {
    padding: 0 10px;
    font-weight: 500;
    min-width: 200px;
}

.root[mode='edit'] [class^=u-form-table] tbody tr:not(:last-child) {
    border-bottom: var(--button-border-width) solid var(--button-border-color);
}

.root[mode='edit'] [class^=u-form-table-view_last-column] {
    width: 5px;
    padding: 0;
}

.root[mode='edit'] [class^=u-form-table_remove-button] {
    height: 20px;
    line-height: 20px;
    font-size: 24px;
}

.root[mode='edit'] [class^=u-form-table_add-button] {
    margin-bottom: 40px;
    position: absolute;
    width: 100%;
}

.item {
    min-width: 200px;
}

.root[short=true] [class^=u-form-table] {
    width: 100%;
}

/* 表格元素顶对齐 */
.root[mode='edit'] tbody tr td {
    vertical-align: top;
    padding: 10px;
}

.root[mode='edit'] tbody tr td:last-child {
    position: absolute;
    padding-right: 0;
    right: 0;
    /* 避免删除按钮的位置遮挡 */
    margin-right: -30px;
    height: 100%;
    width: 20px;
    text-align: right;
    min-width: initial;
}

/* 调整表格内部元素的样式 */
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-string][vusion-style-root=true],
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-select][vusion-style-root=true],
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-user][vusion-style-root=true],
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-department][vusion-style-root=true],
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-rich-text][vusion-style-root=true],
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-image-select][vusion-style-root=true],
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-rich-text][vusion-style-root=true] {
    min-width: 200px;
}

/* 调整文案过长的情况 */
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-rich-text][vusion-style-root=true] {
    word-break: break-word;
}

/* 调整表格内部单选组件的样式 */
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-checkbox][vusion-style-root=true]
[class^=u-checkboxes] {
    display: flex;
    flex-direction: column;
    min-width: 200px;
}

/* 调整表格内部多选组件的样式 */
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-radios][vusion-style-root=true]
> [class^=u-radios] { /* 避免修改到 u-radios_radio 的样式 */
    display: flex;
    flex-direction: column;
    min-width: 200px;
}

/* 调整表格内部图片组件的样式 */
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-image-select][vusion-style-root=true]
[class^=u-checkboxes] {
    display: flex;
    flex-direction: column;
}

.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-image-select][vusion-style-root=true]
[class^=u-flowable-image-select_edit_checkbox] {
    display: flex;
    width: 100%;
}

.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-image-select][vusion-style-root=true]
[class^=u-image] {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-text][vusion-style-root=true],
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-uploader][vusion-style-root=true] {
    min-width: 100px;
}

.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-date-time-range][vusion-style-root=true],
.root[mode='edit'] [class^=u-form-table-view_row] [class^=u-flowable-address][vusion-style-root=true] {
    min-width: 400px
}

/* table readonly*/
.root[mode='readonly'] {
   position: relative;
   width: 580px;
   border: 1px solid var(--border-color-base);
}

/* 表头背景色 */
.root[mode='readonly'] [class^=u-form-table] thead tr {
    background: #f4f6f9;
}

/* 表格的初始化内容 */
.root[mode='readonly'] [class^=u-form-table-view] {
    overflow-x: scroll;
    overflow-y: hidden;
}

.root[mode='readonly'] [class^=u-form-table] {
    width: initial;
}

.root[mode='readonly'] [class^=u-form-table-view_row] td {
   min-width: 200px;
   padding: 10px;
}

.root[mode='readonly'] tbody tr:not(:last-child) {
   border-bottom: 1px solid var(--border-color-base);
}

.root[mode='readonly'] [class^=u-form-table-view_row] td[class^=u-form-table-view_row_last-column] {
   display: none;
}

.root[mode='readonly'] [class^=u-form-table-view_row] td [class^=u-flowable-image-select_readonly_checkbox] {
   display: flex;
   width: initial;
}

.root[mode='readonly'] [class^=u-form-table-view_row] td [class^=u-flowable-image-select_readonly_checkbox] [class^=u-image] {
   width: 20px;
   height: 20px;
   margin-right: 10px;
}

</style>
