### 基本用法

```vue
<template>
    <u-flowable-radios mode="edit" v-model="model" :list="[{key: '未命名1', value: '未命名1'}, {key: '未命名2', value: '未命名2'}]"
		>
		</u-flowable-radios>
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