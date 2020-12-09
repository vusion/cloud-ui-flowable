### 编辑模式

``` html
<u-flowable-email title="邮箱"></u-flowable-email>
```

### 只读模式

``` html
<u-flowable-email mode="readonly" value="test@test.com"></u-flowable-email>
```

### 变量支持-只读模式

``` html
<u-flowable-email mode="readonly" :value="'test@test.com'"></u-flowable-email>
```

### 变量支持-编辑模式

``` html
<u-flowable-email mode="edit" :value="'test@test.com'"></u-flowable-email>
```

### 无数据

``` html
<u-flowable-email mode="readonly" ></u-flowable-email>
```
