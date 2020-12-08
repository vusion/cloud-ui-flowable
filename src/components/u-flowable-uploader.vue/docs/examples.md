### 基本用法

```vue
<template>
		<u-flowable-uploader mode="edit" v-model="model" :clearable="true"></u-flowable-uploader>
</template>
<script>
export default {
    data() {
        return {
            model: [{ name: '文件1' }]
        }
    },
}
</script>
```