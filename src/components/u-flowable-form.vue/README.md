<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableForm 表单

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Basic**

表单组件，可以自定义标题、描述、提交按钮文案以及附件上传

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
        <u-flowable-form-item mode="edit" title="单行文字" tip="请输入文字">
			<u-flowable-string name="e" value="当行文字测试" maxlength="10" minlength="2">
			</u-flowable-string>
        </u-flowable-form-item>
        <u-flowable-form-item mode="edit" title="多行文字" tip="请输入文字">
                <u-flowable-textarea name="f" value="多行文字测试" maxlength="20" minlength="2">
                </u-flowable-textarea>
        </u-flowable-form-item>
         <u-flowable-form-item mode="edit" title="无最小长度的多行文字" tip="请输入文字">
                <u-flowable-textarea name="f" value="多行文字测试" maxlength="20">
                </u-flowable-textarea>
        </u-flowable-form-item>
        <u-flowable-form-item mode="edit" title="无长度限制的多行文字" tip="请输入文字">
                <u-flowable-textarea name="f" value="多行文字测试">
                </u-flowable-textarea>
        </u-flowable-form-item>
        <u-flowable-form-item mode="edit" title="表单" tip="测试表单">
                <u-flowable-table name="people" :collect="userValue" :value="userValue.people">
                    <u-flowable-string mode="edit" name="username" title="用户名" :value="value" :collect="userValue" :required="true"></u-flowable-string>
                
                    <u-flowable-checkbox mode="edit" name="sex"  title="性别" 
                    :value="value1"
                    :list="list" :collect="userValue" ></u-flowable-checkbox>
                
    
                    <u-flowable-checkbox mode="readonly" name="sex2"  title="性别2" 
                    :value="value1"
                    :list="list" :collect="userValue" ></u-flowable-checkbox>
                </u-flowable-table>
        </u-flowable-form-item>
    </u-flowable-form>
</template>
<script>
export default {
    data() {
        return {
            userValue: {
               
            },
            value: null,
            value1: ['女'],
            list: [{value: '男', text: '男'}, {value: '女', text: '女'}]
        }
    },
    
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 用于描述此表单的内容 |
| tip | string |  |  | 用于辅助描述表单 |
| files | array |  |  | 表单附件，一般用来下载文档。数据格式：[{name: '', url: ''}] |
| buttonText | string |  | `'提交'` | 提交按钮的文案 |

### Events

#### @mounted

表单初始化完成时触发

