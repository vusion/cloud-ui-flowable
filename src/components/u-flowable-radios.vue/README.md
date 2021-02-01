<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableRadios 单项选择

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

选择组件，可以自定义编辑和增删选项，填写者需要进行单项选择

## 示例
### 基本用法

```vue
<template>
    <u-flowable-radios mode="edit" v-model="model" :list="[{text: '未命名1', value: '未命名1'}, {text: '未命名2', value: '未命名2'}]"
		>
		</u-flowable-radios>
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
| list | array |  | `[\[object Object\], \[object Object\], \[object Object\]]` | 为选择组件提供具体内容（可以添加“其他”选项，用作选项不符时的自定义填写），可以自定义编辑、增删、批量编辑选项。数据格式：[{text: '', value: ''}] |
| value | string |  |  | 文本内容 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |
| display | string |  | `'row'` | undefined |

