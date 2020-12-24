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
