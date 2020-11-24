### 基础示例-编辑

``` html
<u-flowable-checkbox :value="'数学'" mode="edit" :list="[{key: '数学', label: '数学'}, {key: '语文', label: '语文'}]"></u-flowable-checkbox>
```

### 基础示例-多选

``` html
<u-flowable-checkbox :value="'数学'" mode="edit" :min="1" :max="2" :list="[{key: '数学', label: '数学'}, {key: '语文', label: '语文'},{key: '英语', label: '英语'}]"></u-flowable-checkbox>
```

### 普通文本

``` html
<u-flowable-checkbox mode="readonly" :list="[{key: '数学', label: '数学'}, {key: '语文', label: '语文'},{key: '英语', label: '英语'}]" :value="'数学,语文'"></u-flowable-checkbox>
```
