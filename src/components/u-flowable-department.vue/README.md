<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableText 描述文字

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

描述文字可以为表单添加段落说明信息，字体样式可以自定义设置。

## 示例
### 基本用法

```vue
<template>
    <u-flowable-text mode="edit" v-model="model"></u-flowable-text>
</template>
<script>
export default {
    data() {
        return {
            model: 'test'
        }
    },
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | string |  |  | 请输入描述文字 |

