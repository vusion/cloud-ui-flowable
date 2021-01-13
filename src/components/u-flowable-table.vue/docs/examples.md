### 基本用法

```vue
<template>
<div> 
{{userValue}}
<u-flowable-form mode="edit" @submit="oSubmit">
    <u-flowable-form-item mode="edit" title="表格">
    <u-flowable-table  mode="edit" name="people" >
            <u-flowable-string mode="edit" name="username" title="用户名" :value="value" :collect="userValue" :required="true"></u-flowable-string>
            <u-flowable-checkbox mode="edit" name="sex"  title="性别" 
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
               
            },
            c: null,
            value: '7777',
            value1: ['女'],
        }
    },
    created() {
        setTimeout(() => {
            this.value = '8888';
        }, 3000);
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
        setTimeout(() => {
            this.value = '8888';
        }, 3000);
    },
    methods: {
        oSubmit(data) {
            console.log(data);
        },
    },
}
</script>
```
