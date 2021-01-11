<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableRichText 富文本

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

升级版的文本输入框，拥有格式设置，比如字体和段落设置、页面设置等，使得文本输入更加个性化。

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
| value | string |  |  | 文本内容。点击视图-全屏，可全屏编辑展示 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

