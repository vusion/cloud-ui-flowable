<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableImageSelect 图片选择

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

选择组件，可为选项添加图片

## 示例
### 基本用法

```vue
<template>
    <u-flowable-image-select 
		  mode="edit" 
		  v-model="model"
			:list="[{text: '选项1', value: '选项1', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, {text: '选项2',  value: '选项2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项3',  value: '选项3', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项4',  value: '选项4', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项5',  value: '选项5', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}]"
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
| list | array |  | `[]` | 为选择组件提供具体内容（可以添加“其他”选项，用作选项不符时的自定义填写），可以自定义编辑、增删、批量编辑选项。数据格式: [{text: '', value: '', files: [{url: '', name: ''}]}] |
| min | number |  | `0` | 可以勾选图片选择的最小数量 |
| max | number |  | `99` | 可以勾选图片选择的最大数量 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

