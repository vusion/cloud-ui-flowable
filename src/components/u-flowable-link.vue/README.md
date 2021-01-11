<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableLink 链接

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

单行文本输入框，规定填写者输入内容为链接，带有字段校验

## 示例
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
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | string |  |  | 文本内容 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

