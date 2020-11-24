### 基础示例-编辑

``` html
<u-flowable-image-select :value="'id2'" mode="edit" :list="[{label: '选项1', key: 'id1', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, {label: '选项2',  key: 'id2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {label: '选项2',  key: 'id3', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {label: '选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2',  key: 'id4', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {label: '选项2',  key: 'id5', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}]"></u-flowable-image-select>
```

### 基础示例-可选项数

``` html
<u-flowable-image-select :min="2" :max="3"  mode="edit" :list="[{label: '选项1', key: 'id1', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, {label: '选项2',  key: 'id2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {label: '选项2',  key: 'id3', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {label: '选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2',  key: 'id4', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {label: '选项2',  key: 'id5', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}]"></u-flowable-image-select>
```

### 基础示例-只读

``` html
<u-flowable-image-select mode="readonly" :list="[{label: '选项1', key: 'id1', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, {label: '选项2', key: 'id2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}]" :value="'id2,id1'"></u-flowable-image-select>
```
