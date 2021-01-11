<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableAddress 地址

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

单行文本输入框，规定填写者输入内容为地址，带有字段校验

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
| value | string |  |  | 默认值，输入内容 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

