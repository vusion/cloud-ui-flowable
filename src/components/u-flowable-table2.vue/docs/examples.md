### 基本用法

```vue
<template>
<div> 
{{userValue}}
<u-flowable-form mode="edit" @submit="oSubmit">
        <u-flowable-table  mode="edit" title="表格" name="people" 
            :value="userValue.people"
            :defaultItem="{username: null, age: null}">
           <u-flowable-string mode="edit" name="username" title="用户名" :value="value" :collect="userValue"></u-flowable-string>
           <u-flowable-string mode="edit" name="age"  title="年龄" :collect="userValue"></u-flowable-string>
        </u-flowable-table>
   </u-flowable-form>
</div>
   
</template>
<script>
export default {
    data() {
        return {
            userValue: {
                people: [{username: '1', age: '1'}, {username: '2', age: '2'}],
            },
            c: null,
            value: '7777',
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

### 基本用法

```vue
<template>
<div> 
{{userValue}}
<u-flowable-form mode="edit" @submit="oSubmit">
        <u-flowable-table  mode="edit" title="表格" name="people" 
            :defaultItem="{username: null, age: null}">
           <u-flowable-string mode="edit" @click="oSubmit" name="username" title="用户名" :value="value" :collect="userValue"></u-flowable-string>
           <u-flowable-string mode="edit" @click="oSubmit" name="age"  title="年龄" :collect="userValue" required></u-flowable-string>
        </u-flowable-table>
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

