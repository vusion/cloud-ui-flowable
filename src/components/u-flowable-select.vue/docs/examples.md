### 基本用法

```vue
<template>
    <u-flowable-select mode="edit" v-model="model" :list="[{text: '未命名1', value: '未命名1' }, { text: '未命名2', value: '未命名2' }]"
		>
		</u-flowable-select>
</template>
<script>
export default {
    data() {
        return {
            model: '未命名1'
        }
    },
}
</script>
```