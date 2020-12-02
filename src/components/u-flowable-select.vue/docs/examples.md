### 基本用法

```vue
<template>
    <u-flowable-select mode="edit" v-model="model" :list="[{key: '数学', value: '数学', text: '数学'}, { key: '语文', value: '语文', text: '语文'}]"
		>
		</u-flowable-select>
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