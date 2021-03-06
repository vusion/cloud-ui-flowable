<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableDateTime 日期

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

时间选择组件，需要填写者选择具体日期时间。

## 示例
### 基本用法

```vue
<template>
    <u-flowable-date-time mode="edit" v-model="model"></u-flowable-date-time>
</template>
<script>
export default {
    data() {
        return {
            model: '2020-12-2'
        }
    },
}
</script>
```
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 标题用于告诉填写者应该在该字段中输入什么样的内容，通常是一个词语或词组，也可以是一个问题 |
| value | string |  |  | 设置默认内容后，默认值会显示在该模块的输入框中，填写者若不做修改，默认值将会作为填写者的数据提交。数据格式如：2020-09-09 10:00:00 |
| dateType | string | `[object Object]`<br/>`[object Object]` | `'date'` | 设置时间格式 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

