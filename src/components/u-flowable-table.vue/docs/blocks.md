### 编辑模式

``` html
<u-flowable-table 
		title="表格"
		:children="[{ tag: 'u-flowable-string', attrsMap: { name: 'username', title: '用户名' }}]"
>

</u-flowable-table>
```

### 只读模式

``` html
<u-flowable-table mode="readonly" value="表格"></u-flowable-table>
```

### 变量支持-只读模式

``` html
<u-flowable-table mode="readonly" :value="'支持变量'"></u-flowable-table>
```

### 变量支持-编辑模式

``` html
<u-flowable-table mode="edit" :value="'支持变量'"></u-flowable-table>
```
