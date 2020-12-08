<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableImageSelect 图片选择

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
    <u-flowable-image-select 
		  mode="edit" 
		  v-model="model"
			:list="[{text: '选项1', key: '选项1', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, {text: '选项2',  key: 'id2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项2',  key: '选项2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项3',  key: '选项3', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项4',  key: '选项4', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}]"
		>
		</u-flowable-image-select>
</template>
<script>
export default {
    data() {
        return {
            model: ['选项1']
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
| list | Array |  |  | 为选择组件提供具体内容（可以添加“其他”选项，用作选项不符时的自定义填写），可以自定义编辑、增删、批量编辑选项。 |
| value | Array |  |  | 默认值，记录已经选择的选项 |

