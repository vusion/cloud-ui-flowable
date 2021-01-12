<template>
<div :class="$style.root">
   <u-form-table-view
    :data="currentValue" dynamic
    :min-count="minCount"
    :get-default-item="getDefaultItem"
   >
      <u-form-table-view-column
        :key="columnItem.name" v-for="(columnItem , index) in children"
        :title="columnItem.attrsMap.title" width="20%">
        <div slot="cell" slot-scope="{ item, index }">
            <component
                v-if="columnItem.tag !== 'u-flowable-text'"
                :is="columnItem.tag"
                v-model="item[columnItem.attrsMap.name]"
                v-bind="columnItem.attrsMap"
            >
            </component>
            <component
               v-if="columnItem.tag === 'u-flowable-text'"
               :is="'u-flowable-text'"
               v-bind="columnItem.attrsMap"
            >
            </component>
        </div>
      </u-form-table-view-column>
   </u-form-table-view>
</div>
</template>

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
        minCount: { type: Number, default: 0 },
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
            // 设置组件的初始化默认值
            const defaultValue = {};
            this.children.forEach((child) => {
                defaultValue[child.attrsMap.name] = child.attrsMap.value;
            });
            return defaultValue;
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
