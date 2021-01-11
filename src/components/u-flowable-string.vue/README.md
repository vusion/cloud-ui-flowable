<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableString 单行文字

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

单行文本输入框，需要填写者在输入框内根据标题填写相应的内容。

## 示例
### 基本用法

```vue
<template>
    <u-flowable-string mode="edit" v-model="model"></u-flowable-string>
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
| value | string |  |  | 文本内容 |
| minlength | string |  | `0` | 最小长度 |
| maxlength | string |  |  | 最大长度 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

