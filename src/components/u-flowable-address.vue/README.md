<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableAddress 地址

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
    <u-flowable-address mode="edit" v-model="model"></u-flowable-address>
</template>
<script>
export default {
    data() {
        return {
            model: '上海-上海市-黄浦区 测试地址 测试地址'
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
| value | string |  |  | 默认值，输入内容 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

