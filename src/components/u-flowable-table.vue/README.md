<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableTable 表格

- [示例](#示例)
    - [基本用法](#基本用法)
    - [只读](#只读)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)

**Advanced**

创建自定义列字段，支持其他字段的嵌入，填写者可通过添加行添加多条数据。

## 示例
### 基本用法

```vue
<template>
<div> 
{{userValue}}
<u-flowable-form mode="edit" @submit="oSubmit">
    <u-flowable-form-item mode="edit" title="表格">
        <u-flowable-table  mode="edit" name="people" :collect="userValue">
                <u-flowable-string mode="edit" name="username" title="用户名" :value="value" :collect="userValue" :required="true"></u-flowable-string>
                
                <u-flowable-checkbox mode="edit" name="sex"  title="性别" 
                :value="value1"
                :list="list" :collect="userValue" ></u-flowable-checkbox>

                <u-flowable-select mode="edit" name="sex7"  title="性别" 
                :value="value1[0]"
                :list="list" :collect="userValue" ></u-flowable-select>

                <u-flowable-radios mode="edit" name="sex8"  title="性别" 
                :value="value1[0]"
                :list="list" :collect="userValue" ></u-flowable-radios>
            
                <u-flowable-checkbox mode="readonly" name="sex2"  title="性别2" 
                :value="value1"
                :list="list" :collect="userValue" ></u-flowable-checkbox>
                
        </u-flowable-table>
    </u-flowable-form-item>
</u-flowable-form>
        
</div>
   
</template>
<script>
export default {
    data() {
        return {
            userValue: {
               
            },
            c: null,
            value: null,
            value1: ['女'],
            list: [{value: '男', text: '男'}, {value: '女', text: '女'}]
        }
    },
    created() {
        setTimeout(() => {
            console.log('change value');
            this.value = '8888';
        }, 3000);
        setTimeout(() => {
            console.log('change value');
            this.value1 = null;
            this.list = [{value: '男1', text: '男1'}, {value: '女1', text: '女1'}];
            this.value1 = ['男1'];
        }, 6000);
    },
    methods: {
        oSubmit(data) {
            console.log(data);
        },
    },
}
</script>
```

### 只读

```vue
<template>
<div> 
{{userValue}}
<u-flowable-form mode="edit" @submit="oSubmit">
    <u-flowable-form-item mode="readonly" title="表格">
    <u-flowable-table  mode="readonly" name="people" :value="userValue.people">
            <u-flowable-string  name="username" title="用户名" :value="value" :collect="userValue" :required="true"></u-flowable-string>
            <u-flowable-checkbox  name="sex"  title="性别" 
            :value="value1"
            :list="[{value: '男', text: '男'}, {value: '女', text: '女'}]" :collect="userValue" ></u-flowable-checkbox>
            </u-flowable-table>
    </u-flowable-form-item>
</u-flowable-form>
        
</div>
   
</template>
<script>
export default {
    data() {
        return {
            userValue: {
                people: [
                    {username: '1', sex: ['男']},
                ],
            },
            c: null,
            value: '7777',
            value1: ['女'],
        }
    },
    created() {
    },
    methods: {
        oSubmit(data) {
            console.log(data);
        },
    },
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | array |  | `[]` | 默认值 |
| dynamic | boolean |  | `true` | 是否支持动态添加 |
| minCount | number |  | `1` | 设置表格组件的最小行数 |
| maxCount | number |  | `99` | 设置表格组件的最大行数 |
| required | boolean |  | `false` | 选择必填后，填写者不填写将无法提交表单 |

### Slots

#### (default)

插入其他组件。

