### 基础示例-编辑

``` html
<u-flowable-checkbox title="多项选择" :list="[{value: '未命名1', text: '未命名1'}, {value: '未命名2', text: '未命名2'}]"></u-flowable-checkbox>
```

### 基础示例-多选

``` html
<u-flowable-checkbox :value="['未命名1']" mode="edit" :min="1" :max="2" :list="[{value: '未命名1', text: '未命名1'}, { value: '未命名2', text: '未命名2'}]"></u-flowable-checkbox>
```

### 普通文本

``` html
<u-flowable-checkbox mode="readonly" :list="[{value: '未命名1', text: '未命名1'}, {  value: '未命名2', text: '未命名2'}]" :value="['未命名1', '未命名2']"></u-flowable-checkbox>
```
