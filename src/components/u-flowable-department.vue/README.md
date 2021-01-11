<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableDepartment 部门

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Advanced**

提供组织架构-部门的选择

## 示例
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | string |  |  | 设置默认内容后，默认值会显示在该模块的输入框中，填写者若不做修改，默认值将会作为填写者的数据提交。多个部门 ID 以逗号隔开 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

