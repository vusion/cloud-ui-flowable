### 编辑模式

``` html
<u-flowable-rich-text mode="edit" value="<a href='http://www.baidu.com' target='_blank'>百度</a>" size="huge" :clearable="true" style="color:red"></u-flowable-rich-text>
```

### 只读模式

``` html
<u-flowable-rich-text mode="readonly" value="<a href='http://www.baidu.com' target='_blank'>百度</a>"></u-flowable-rich-text>
```

### 变量支持-只读模式

``` html
<u-flowable-rich-text mode="readonly" :value="'<a href=\'http://www.baidu.com\' target=\'_blank\'>百度</a>'"></u-flowable-rich-text>
```

### 变量支持-编辑模式

``` html
<u-flowable-rich-text mode="edit" :value="'<a href=\'http://www.baidu.com\' target=\'_blank\'>百度</a>'"></u-flowable-rich-text>
```
