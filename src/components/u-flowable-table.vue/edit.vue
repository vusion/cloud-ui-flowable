<template>
<div :class="$style.root">
   <u-form-table-view :data="currentValue" dynamic>
      <u-form-table-view-column :key="columnItem.name" v-for="(columnItem , index) in children" :title="columnItem.attrsMap.title" width="20%">
        <div slot="cell" slot-scope="{ item, index }">
            <component
                :is="columnItem.tag"
                v-model="item[columnItem.attrsMap.name]"
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
        /*
         * 配置值，用来设置表单嵌入元素的类型属性和值填充的 key
        */
        children: Array,
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
            /* 这里是组件对外的值输出值, 是根据属性的获取值填充的
             *  [{ }]
             */
            if (this.currentValue && JSON.stringify(value) === JSON.stringify(this.currentValue)) {
                return this.currentValue;
            }

            return value || [];
        },
    },
};
</script>

<style module>
.root {
   position: relative;
}

</style>
