### 编辑模式

``` html
<u-flowable-table 
		mode="edit"
		title="表格"
		:children="[{ tag: 'u-flowable-string', attrsMap: { name: 'username', title: '用户名' }}]"
>

</u-flowable-table>
```

### 变量支持-只读模式

``` html
<u-flowable-table
	 mode="readonly" 
	 :children="[{ tag: 'u-flowable-string', attrsMap: { name: 'username', title: '用户名' }}]"
	 :value="[{ username: 1 }]">
</u-flowable-table>
```