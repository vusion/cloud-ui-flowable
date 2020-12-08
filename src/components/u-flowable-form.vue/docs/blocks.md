### 编辑模式

``` html
<u-flowable-form title="表单" tip="测试" :files="[{name: 'xxx', url: 'test.com'}]" buttonText="继续">
	<u-flowable-form-item mode="edit" title="邮箱" tip="请输入正确邮箱">
			<u-flowable-email  value="test@test.com" size="huge"
					name="e.f"
			:clearable="true" style="color:red"></u-flowable-email>
	</u-flowable-form-item>
	<u-flowable-form-item mode="edit" title="邮箱" tip="请输入正确邮箱">
			<u-flowable-email value="test@test.com" size="huge" 
			name="c.d[1]"
			:clearable="true" 
			style="color:red"></u-flowable-email>
	</u-flowable-form-item>
</u-flowable-form>
```
