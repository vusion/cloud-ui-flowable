### 基本用法

```vue
<template>
    <u-flowable-table mode="edit" 
        v-model="model"
        :children="[{ tag: 'u-flowable-string', attrsMap: {  
            name: 'username',
            title: '用户名', 
        } }]"
    >
   </u-flowable-table>
</template>
<script>
export default {
    data() {
        return {
            model: [{ username: 'zxy' }]
        }
    },
}
</script>
```