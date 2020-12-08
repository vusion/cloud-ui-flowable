### 基础示例

```vue
<template>
<div>
<u-flowable-form-item mode="edit" title="邮箱" tip="请输入正确邮箱">
    <u-flowable-email  value="test@test.com" size="huge" @test="test" :clearable="true"></u-flowable-email>
</u-flowable-form-item>
<u-flowable-form-item mode="edit" title="邮箱" tip="请输入正确邮箱">
    <u-flowable-email value="test@test.com" size="huge" :clearable="true"></u-flowable-email>
</u-flowable-form-item>
</div>
</template>
<script>
export default {
    methods: {
        test() {
        }
    }
}
</script>
```

### 基础示例-只读

```html
<u-flowable-form-item mode="readonly" title="邮箱" tip="请输入正确邮箱">
    <u-flowable-email value="test@test.com" size="huge" :clearable="true"></u-flowable-email>
</u-flowable-form-item>
<u-flowable-form-item mode="readonly" title="邮箱" tip="请输入正确邮箱">
    <u-flowable-email value="test@test.com" size="huge" :clearable="true"></u-flowable-email>
</u-flowable-form-item>
```
