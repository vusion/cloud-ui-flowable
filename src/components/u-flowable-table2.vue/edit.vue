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
        dataSource: Array,
        dynamic: {
            type: Boolean,
            default: true,
        },
        defaultItem: Object,
        minCount: { type: Number, default: 0 },
        maxCount: { type: Number },
        /*
         * 配置值，用来设置表单嵌入元素的类型属性和值填充的 key
        */
        children: Array,
        currentChildren: Array,
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
        getDefaultItem() {
            return JSON.parse(JSON.stringify(this.defaultItem || {}));
        },
        formatValue(value) {
            if (this.currentValue && JSON.stringify(value) === JSON.stringify(this.currentValue)) {
                return this.currentValue;
            }

            // 如何设置了初始化的值，那么需要用初始化的值填充
            const resultValue = value || [];
            return resultValue;
        },
    },
    render(h) {
        const children = this.$slots.default || [];
        const name = this.$attrs.name;
        return h('div', {
            class: this.$style.root,
        }, [
            h('u-form-table-view', {
                props: {
                    data: this.currentValue,
                    dynamic: this.dynamic,
                    minCount: this.minCount,
                    maxCount: this.maxCount,
                    getDefaultItem: this.getDefaultItem.bind(this),
                },
            }, children.map((item) =>
                h('u-form-table-view-column', {
                    props: {
                        title: item.componentOptions.propsData.title,
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
                            formItem.componentOptions.listeners = {
                                ...formItem.componentOptions.listeners,
                            };
                            const propsData = formItem.componentOptions.propsData;
                            console.log(formItem, 123, formItem.data.on);
                            formItem.componentOptions.propsData = formItem.componentOptions.propsData || {};
                            let baseName = propsData.name;
                            // 说明已经被重新设置了
                            if (baseName.includes('.')) {
                                baseName = baseName.split('.').pop();
                            }
                            propsData.name = `${name}.${rowIndex}.${baseName}`;
                            if ('value' in propsData && cellItem[baseName] === null) {
                                return formItem;
                            }
                            propsData.value = cellItem[baseName];
                            return formItem;
                        },
                    },
                }),
            )),
        ]);
    },
};
</script>

<style module>
.root {
   position: relative;
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

</style>
