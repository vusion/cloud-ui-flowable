### 基本用法

```vue
<template>
    <u-flowable-number mode="edit" v-model="model" @input="onInput($event)"></u-flowable-number>
</template>
<script>
export default {
    data() {
        return {
            model: 0
        }
    },
    methods: {
        onInput($event) {
            console.log($event,111);
        },
    },
}
</script>
```