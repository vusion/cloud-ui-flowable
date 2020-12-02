### 基本用法

```vue
<template>
    <u-flowable-date-time-range mode="edit" v-model="model"></u-flowable-date-time-range>
</template>
<script>
export default {
    data() {
        return {
            model: '2020-12-1~2020-12-2'
        }
    },
}
</script>
```