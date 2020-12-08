### 基本用法

```vue
<template>
    <u-flowable-checkbox mode="edit" v-model="model" :list="[{key: '未命名1', value: '未命名1', text: '未命名1'}, { key: '未命名2', value: '未命名2', text: '未命名2'}]"
		>
		</u-flowable-checkbox>
</template>
<script>
export default {
    data() {
        return {
            model: ['未命名1']
        }
    },
}
</script>
```