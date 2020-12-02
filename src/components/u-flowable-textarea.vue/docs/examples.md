### 基本用法

```vue
<template>
    <u-flowable-textarea mode="edit" v-model="model"></u-flowable-textarea>
</template>
<script>
export default {
    data() {
        return {
            model: '多行文本'
        }
    },
}
</script>
```