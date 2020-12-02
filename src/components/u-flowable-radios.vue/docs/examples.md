### 基本用法

```vue
<template>
    <u-flowable-radios mode="edit" v-model="model" :list="[{key: '数学', value: '数学'}, {key: '语文', value: '语文'}]"
		>
		</u-flowable-radios>
</template>
<script>
export default {
    data() {
        return {
            model: '数学'
        }
    },
}
</script>
```