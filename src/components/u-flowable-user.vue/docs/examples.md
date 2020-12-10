### 基本用法

```vue
<template>
    <u-flowable-user mode="edit" v-model="model" :load="load"></u-flowable-user>
</template>
<script>
export default {
    data() {
        return {
            model: 'test'
        }
    },
    methods: {
        load() {
            return Promise.resolve([
                {value: 1, text: '张三'},
                {value: 2, text: '李四'},
                {value: 3, text: '王五'},
            ]);
        }
    },
}
</script>
```


```vue
<template>
    <u-flowable-user mode="readonly" v-model="model" :load="load"></u-flowable-user>
</template>
<script>
export default {
    data() {
        return {
            model: '1,2'
        }
    },
    methods: {
        load() {
            return Promise.resolve([
                {value: 1, text: '张三'},
                {value: 2, text: '李四'},
                {value: 3, text: '王五'},
            ]);
        }
    },
}
</script>
```
