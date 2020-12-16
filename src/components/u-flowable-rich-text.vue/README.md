<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableRichText 富文本

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
    <u-flowable-rich-text mode="edit" v-model="model"></u-flowable-rich-text>
</template>
<script>
export default {
    data() {
        return {
            model: '富文本'
        }
    }
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 标题用于告诉填写者应该在该字段中输入什么样的内容，通常是一个词语或词组，也可以是一个问题 |
| value | string |  |  | 文本内容 |
| required | boolean |  |  | 选择必填后，填写者不填写将无法提交表单 |

