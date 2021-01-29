### 基础示例-编辑

``` html
<u-flowable-radios title="单项选择" :list="[{text: '未命名1', value: '未命名1'}, {text: '未命名2', value: '未命名2'}]"></u-flowable-radios>
```

### 普通文本

``` html
<u-flowable-radios mode="readonly" :list="[{text: '未命名1', value: '未命名1'}, { text: '未命名1', value: '未命名2'}]" value="未命名2"></u-flowable-radios>
```

### 多个可选项

``` html
<u-flowable-radios mode="edit" :list="[
{ text: '未命名1', value: '未命名1'}, 
{ text: '未命名2', value: '未命名2'},
{ text: '未命名3', value: '未命名3'},
{ text: '未命名4', value: '未命名4'},
{ text: '未命名5', value: '未命名5'},
{ text: '未命名6', value: '未命名6'},
{ text: '未命名7', value: '未命名7'},
]" value="未命名2"></u-flowable-radios>
```

### 普通文本-编辑

``` html
<u-flowable-radios  :list="[{text: '未命名1', value: '未命名1'}, { text: '未命名2', value: '未命名2'}]" value="未命名2"></u-flowable-radios>
```
