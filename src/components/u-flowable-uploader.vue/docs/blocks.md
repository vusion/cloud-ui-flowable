### 编辑模式

``` html
<u-flowable-uploader title="附件上传" url="/api/v1/bucket/upload" :multiple="true" urlField="result"></u-flowable-uploader>
```

### 只读模式

``` html
<u-flowable-uploader mode="readonly" :value="[{ name: '文件1' }]" ></u-flowable-uploader>
```

### 变量支持-只读模式

``` html
<u-flowable-uploader mode="readonly" :value="[{ name: '文件1' }]"></u-flowable-uploader>
```

### 变量支持-编辑模式

``` html
<u-flowable-uploader mode="edit" :value="[{ name: '文件1' }]" ></u-flowable-uploader>
```
