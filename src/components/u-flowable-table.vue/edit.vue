<script>
import { UFormTable, UFormTableAddButton, UFormTableRemoveButton } from 'cloud-ui.vusion/src/components/u-form-table.vue';
import get from 'lodash/get';
import set from 'lodash/set';

export default {
    name: 'u-flowable-table',
    components: {
        UFormTable,
        UFormTableAddButton,
        UFormTableRemoveButton,
    },
    props: {
        value: Array,
        dynamic: {
            type: Boolean,
            default: true,
        },
        required: {
            type: Boolean,
            default: false,
        },
        minCount: { type: Number, default: 1 },
        maxCount: { type: Number, default: 99 },
    },
    data() {
        return {
            currentValue: this.formatValue(this.value),
            errorList: [],
        };
    },
    watch: {
        currentValue: {
            handler(currentValue) {
                this.$emit('input', currentValue);
            },
            immediate: true,
        },
        errorList: {
            handler(errorList) {
                const values = Object.values(errorList).filter((i) => i);
                if (values.length) {
                    this.$emit('error', values[0]);
                }
            },
            immediate: true,
            deep: true,
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
        const self = this;
        const dynamic = this.dynamic && (this.$attrs.mode !== 'readonly');
        const minCount = this.minCount;
        const defaultItem = {};
        const getDefaultItem = () => JSON.parse(JSON.stringify(defaultItem));
        this.getDefaultItem = getDefaultItem;
        children.forEach((child) => {
            if (child.tag) {
                defaultItem[child.componentOptions.propsData.name] = child.componentOptions.propsData.value || null;
            }
        });
        while ((this.currentValue || []).length < this.minCount) {
            this.currentValue = this.currentValue || [];
            this.currentValue.push(getDefaultItem());
        }

        return h('div', {
            class: [this.$style.root, children.length <= 2 && this.$style.short],
        }, [
            h('div', {
                class: this.$style.table,
            }, [
                h('u-form-table',
                  [
                      h('thead', [
                          h('tr', [

                              dynamic ? h('th', {
                                  class: this.$style['last-column'],
                                  props: {
                                      dynamic,
                                  },
                              }) : undefined,
                              ...children.map((child) => child.tag && h('th', {
                                  style: {
                                      width: `${100 / children.length}%`,
                                  },
                              }, [
                                  h('div', {
                                      class: this.$style.title,
                                      attrs: {
                                          required: child.data.attrs.required,
                                      },
                                  }, [child.data.attrs.title])])).filter((i) => i),
                          ]),
                      ]),
                      h('tbody', [
                          ...(this.currentValue || []).map((item, rowIndex) => h('tr', {
                              class: this.$style.row,
                          }, [
                              dynamic ? h('td', {
                                  class: this.$style.cell,
                              }, [
                                  h('u-form-table-remove-button', {
                                      class: this.$style.removeButton,
                                      on: {
                                          click: () => {
                                              const index = rowIndex;
                                              if ((this.currentValue || []).length <= this.minCount)
                                                  return;
                                              this.currentValue.splice(index, 1);
                                              this.errorList.splice(index, 1);
                                          },
                                      },
                                      props: {
                                          disabled: this.currentValue.length <= minCount,
                                      },
                                  }),
                              ]) : undefined,
                              ...children.map((child, cellIndex) => {
                                  if (!child.tag) {
                                      return undefined;
                                  }
                                  const item = child;
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
                                      if (error && error.message) {
                                          // 数组形式存储错误信息，而不要用固定索引
                                          set(self.errorList, `${rowIndex}.${cellIndex}`, {
                                              message: error?.message,
                                              type: error.type,
                                          });
                                      }
                                      _error && _error.bind(self, error)();
                                  };
                                  const _input = listeners.input;
                                  listeners.input = (input) => {
                                      self.$emit('input', self.currentValue);
                                      set(self.errorList, `${rowIndex}.${cellIndex}`, null);
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
                                  if (formItem.componentOptions.tag !== 'u-flowable-text') {
                                      propsData.value = this.currentValue[rowIndex][baseName];
                                  }

                                  // 获取当前位置的错误信息
                                  const currentError = get(this.errorList, `${rowIndex}.${cellIndex}`);

                                  return h('td', {
                                      class: this.$style.cell,
                                  }, [h('div', {
                                      class: this.$style.item,
                                  }, [
                                      formItem,
                                      currentError?.message && h('div', {
                                          class: this.$style.error,
                                          attrs: {
                                              type: 'error',
                                          },
                                      }, [
                                        h('div', {
                                              class: this.$style.icon,
                                          }, []),
                                          currentError?.message,
                                      ]),
                                  ])]);
                              }).filter((i) => i),

                          ])),
                      ]),
                  ]),
            ]),
            !dynamic ? undefined : h('u-form-table-add-button', {
                class: this.$style['add-button'],
                on: {
                    click: () => {
                        if (this.currentValue.length >= this.maxCount)
                            return;
                        const item = this.getDefaultItem();
                        this.currentValue.push(item);
                    },
                },
                props: {
                    disabled: (this.currentValue || []).length >= this.maxCount,
                },
            }, ['添加']),
        ]);
    },
};
</script>

<style module>

.title[required]:after {
    content: '*';
    color: #F24957;
    display: inline-block;
    align-items: center;
    margin-left: 5px;
}

.short [class^=u-form-table] {
    min-width: 100%;
}
.add-button {
    margin: 10px 0;
}
.last-column {
    width: 0!important;
    min-width: 0!important;
}

.last-column[dynamic] {
    width: 40px!important;
    min-width: 40px!important;
}
.removeButton {
    line-height: 1.0;
    height: 24px;
}
.root[mode='edit'] {
   position: relative;
   padding-right: 36px;
}

/* 只选择表格的最外层的元素样式 */
.root[mode='edit'] > .table {
    overflow-x: scroll;
    overflow-y: auto;
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

/* .root[mode='edit'] .last-column {
    width: 5px;
    padding: 0;
} */

.root[mode='edit'] [class^=u-form-table_remove-button] {
    font-size: 24px;
    position: absolute;
    right: 0;
    /* 避免删除按钮太长 */
    width: 20px;
    text-align: right;
    display: inline-block;
    min-width: initial;
}

.root[mode='edit'] [class^=u-form-table_add-button] {
    /* margin-bottom: 40px; */
    /* position: absolute; */
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

/* 调整表格内部元素的样式 */
.root[mode='edit'] .row [class^=u-flowable-string],
.root[mode='edit'] .row [class^=u-flowable-select],
.root[mode='edit'] .row [class^=u-flowable-user],
.root[mode='edit'] .row [class^=u-flowable-department],
.root[mode='edit'] .row [class^=u-flowable-rich-text],
.root[mode='edit'] .row [class^=u-flowable-image-select],
.root[mode='edit'] .row [class^=u-flowable-rich-text] {
    min-width: 200px;
}

/* 调整文案过长的情况 */
.root[mode='edit'] .row [class^=u-flowable-rich-text]{
    word-break: break-word;
}

/* 调整表格内部图片组件的样式 */
.root[mode='edit'] .row [class^=u-flowable-image-select]
[class^=u-checkboxes] {
    display: flex;
    flex-direction: column;
}

.root[mode='edit'] .row [class^=u-flowable-image-select]
[class^=u-flowable-image-select_edit_checkbox] {
    display: flex;
    width: 100%;
    border: 1px solid var(--border-color-base);
    padding: 5px;
    margin: 0 !important;
    margin-bottom: 5px !important;
    border-radius: var(--button-border-radius);
}

.root[mode='edit'] .row [class^=u-flowable-image-select]
[class^=u-image] {
    width: 80px;
    height: 80px;
    margin-right: 5px;
    min-width: 80px; /* 避免图标被挤压 */
}

.root[mode='edit'] .row [class^=u-flowable-text],
.root[mode='edit'] .row [class^=u-flowable-uploader] {
    min-width: 100px;
}

.root[mode='edit'] .row [class^=u-flowable-address] {
    min-width: 400px
}

.root[mode='edit'] .row [class^=u-flowable-date-time-range_edit__] {
    min-width: 400px; /* 避免选择到组件内部的元素 */
}

/* table readonly*/
.root[mode='readonly'] {
   position: relative;
   /* width: 580px; */
   border: 1px solid var(--border-color-base);
}

/* 表头背景色 */
.root[mode='readonly'] [class^=u-form-table] thead tr {
    background: #f4f6f9;
}

/* 表格的初始化内容 */
.root[mode='readonly'] .table {
    overflow-x: scroll;
    overflow-y: hidden;
}

.root[mode='readonly'] [class^=u-form-table] {
    width: initial;
}

.root[mode='readonly'] .row td {
   min-width: 200px;
   padding: 10px;
}

.root[mode='readonly'] tbody tr:not(:last-child) {
   border-bottom: 1px solid var(--border-color-base);
}

.root[mode='readonly'] .row td.last-column {
   display: none;
}

.root[mode='readonly'] .row [class^=u-flowable-image-select] {

    min-width: 200px;
}
/* 调整表格内部图片组件的样式 */
.root[mode='readonly'] .row [class^=u-flowable-image-select]
[class^=u-checkboxes] {
    display: flex;
    flex-direction: column;
}

.root[mode='readonly'] .row [class^=u-flowable-image-select]
[class^=u-flowable-image-select_readonly_checkbox] {
    display: flex;
    width: 100%;
    border: 1px solid var(--border-color-base);
    padding: 5px;
    margin: 0 !important;
    margin-bottom: 5px !important;
    border-radius: var(--button-border-radius);
}

.root[mode='readonly'] .row [class^=u-flowable-image-select]
[class^=u-image] {
    width: 80px;
    height: 80px;
    margin-right: 5px;
    min-width: 80px; /* 避免图标被挤压 */
}

.icon {
    display: inline-block;
    margin-right: 5px;
}

.icon:before {
   display: inline-block;
   icon-font: url('cloud-ui.vusion/src/components/i-icon.vue/assets/close-solid.svg');
}

.error {
    color: #F24957;
    font-size: 12px;
    margin-top: 5px;
    display: none;
}

.error[dirty] {
    display: block;
}

</style>
