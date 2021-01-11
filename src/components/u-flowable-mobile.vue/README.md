<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableMobile 手机

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

单行文本输入框，规定填写者输入内容为手机，带有字段校验

## 示例
### 基本用法

```vue
<template>
    <u-flowable-mobile mode="edit" v-model="model"></u-flowable-mobile>
</template>
<script>
export default {
    data() {
        return {
            model: '12123123112'
        }
    },
}
</script>
```
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | string |  |  | 设置默认内容后，默认值会显示在该模块的输入框中，填写者若不做修改，默认值将会作为填写者的数据提交。 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

