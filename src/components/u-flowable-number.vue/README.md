<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableNumber 数字

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

单行文本输入框，规定填写者输入内容为数字，带有字段校验

## 示例
### 基本用法

```vue
<template>
    <u-flowable-number mode="edit" v-model="model"></u-flowable-number>
</template>
<script>
export default {
    data() {
        return {
            model: 0
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
| value | number |  |  | 设置默认内容后，默认值会显示在该模块的输入框中，填写者若不做修改，默认值将会作为填写者的数据提交。 |
| point | number |  | `0` | 选择后，填写者填写时可以输入带有小数点的数字，否则只能输入整数。 |
| min | number |  |  | 最小值 |
| max | number |  |  | 最大值 |

