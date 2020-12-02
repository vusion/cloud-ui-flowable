### 基本用法

```vue
<template>
    <u-flowable-link mode="edit" v-model="model"></u-flowable-link>
</template>
<script>
export default {
    data() {
        return {
            model: 'http:www.abc.com'
        }
    },
}
</script>
```