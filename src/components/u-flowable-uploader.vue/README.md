<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableUploader 附件上传

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

上传文件组件，可以自定义上传说明，指导填写者上传文件、图片等，可添加多个附件。

## 示例
### 基本用法

```vue
<template>
		<u-flowable-uploader mode="edit" v-model="model"  ></u-flowable-uploader>
</template>
<script>
export default {
    data() {
        return {
            model: [{ name: '文件1' }]
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
| placeholder | string |  |  | 占位内容 |
| value | Array |  |  | 默认值，记录已经上传的文件列表 |
| url |  |  |  | 上传地址 |

