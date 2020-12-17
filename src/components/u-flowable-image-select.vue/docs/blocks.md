### 基础示例-编辑

``` html
	<u-flowable-image-select title="图片选择" 
			:list="[{
			text: '选项1', 
			key: '选项1', 
			files: [
        {
          url: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'
        }
      ],
			image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, 
			{
			text: '选项2',  
			key: 	'id2', 
			files: [
        {
          url: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'
        }
			], 
				image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'
			}, 
			{
			text: '选项2',  
			key: '选项2', 
			files: [
        {
          url: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'
        }
			],
			image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, 
			{
			text: '选项3',  
			key: '选项3', 
			files: [
        {
          url: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'
        }
			],
			image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, 
			{
				text: '选项4',  
				key: '选项4', 
				files: [
					{
						url: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'
					}
				],
				image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'
			}]">
	</u-flowable-image-select>
```

### 基础示例-可选项数

``` html
<u-flowable-image-select :min="2" :max="3"  mode="edit" :list="[{text: '选项1', key: '选项1', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, {text: '选项2',  key: 'id2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项2',  key: '选项2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项3',  key: '选项3', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项4',  key: '选项4', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}]"></u-flowable-image-select>
```

### 基础示例-只读

``` html
<u-flowable-image-select mode="readonly" :list="[{text: '选项1', key: '选项1', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, {text: '选项2',  key: 'id2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项2',  key: '选项2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项3',  key: '选项3', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项4',  key: '选项4', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}]" :value="['id2','id1']"></u-flowable-image-select>
```
