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
