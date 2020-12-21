<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableForm 表单

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
    <u-flowable-form>
        <u-flowable-form-item mode="edit" title="邮箱" tip="请输入正确邮箱">
            <u-flowable-email value="test@test.com" 
                name="e.f"
            ></u-flowable-email>
        </u-flowable-form-item>
        <u-flowable-form-item mode="edit" title="邮箱" tip="请输入正确邮箱">
            <u-flowable-email value="test@test.com"  
            name="c.d[1]"
             ></u-flowable-email>
        </u-flowable-form-item>
    </u-flowable-form>
</template>
<script>
export default {
    data() {
        return {
            
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
| tip | string |  |  | 提示属性用于指定对该模块进行一些附加说明，一般用来指导填写者输入。 |
| files | Array |  |  | 表单附件，一般用来下载文档。数据格式：[{name: '', url: ''}] |
| buttonText | string |  | `'提交'` | 提交按钮的文案。 |

