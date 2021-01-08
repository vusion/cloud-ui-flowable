<template>
<div :class="$style.root">
    <u-table>
        <thead>
            <tr>
                <th width="20%">序号</th>
                <th width="20%">姓名</th>
                <th>地址</th>
                <th width="20%">出生日期</th>
            </tr>
        </thead>
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
