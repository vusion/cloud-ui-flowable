### 基本用法

```vue
<template>
    <u-flowable-department mode="edit" v-model="model" :load="load"></u-flowable-department>
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
                {value: 1, text: '部门1'},
                {value: 2, text: '部门2'},
                {value: 3, text: '部门3'},
            ]);
        }
    },
}
</script>
```


```vue
<template>
    <u-flowable-department mode="readonly" v-model="model" :load="load"></u-flowable-department>
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
                {value: 1, text: '部门1'},
                {value: 2, text: '部门2'},
                {value: 3, text: '部门3'},
            ]);
        }
    },
}
</script>
```
