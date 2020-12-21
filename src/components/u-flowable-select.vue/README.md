<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableSelect 下拉选择

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

多项中选择一个时使用

## 示例
### 基本用法

```vue
<template>
    <u-flowable-select mode="edit" v-model="model" :list="[{text: '未命名1', value: '未命名1' }, { text: '未命名2', value: '未命名2' }]"
		>
		</u-flowable-select>
</template>
<script>
export default {
    data() {
        return {
            model: '未命名1'
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
| list | Array |  |  | 为选择组件提供具体内容（可以添加“其他”选项，用作选项不符时的自定义填写），可以自定义编辑、增删、批量编辑选项。数据格式：[{ text: '', value: '' }] |
| value | string |  |  | 文本内容 |
| required | boolean |  |  | 选择必填后，填写者不填写将无法提交表单 |

