<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableTable 表格

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

表格组件，支持内部添加元素

## 示例
### 基本用法

```vue
<template>
    <u-flowable-table mode="edit" 
        v-model="model"
        :children="[{ tag: 'u-flowable-string', attrsMap: {  
            name: 'username',
            title: '用户名', 
        } }]"
    >
   </u-flowable-table>
</template>
<script>
export default {
    data() {
        return {
            model: [{ username: 'zxy' }]
        }
    },
}
</script>
```
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | array |  |  | 请输入描述文。点击视图-全屏，可全屏编辑展示 |
| children | array |  | `[]` | 配置表格组件的每栏元素 |

