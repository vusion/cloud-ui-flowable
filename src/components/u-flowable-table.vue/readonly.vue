<template>
<div :class="$style.root">
    <u-table>
        <thead>
            <tr>
                <th
                v-for="(columnItem, index) in children"
                :key="columnItem.attrsMap.name"
                width="20%">
                    {{ columnItem.attrsMap.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in value" :key="rowIndex">
              <th
                v-for="(rowColumnItem, rowItemColumnIndex) in children"
                :key="rowItemColumnIndex"
            >
                {{ row[rowColumnItem.attrsMap.name] }}
            </th>
            </tr>
        </tbody>
    </u-table>
</div>
</template>

<script>
import UTable from 'cloud-ui.vusion/src/components/u-table.vue';

export default {
    components: {
        UTable,
    },
    props: {
        // 显示表格内部的值
        value: Array,
        // 配置表格头部
        children: Array,
    },
};
</script>

<style module>
.root {
   position: relative;
}

</style>
