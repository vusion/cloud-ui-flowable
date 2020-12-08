### 基本用法

```vue
<template>
    <u-flowable-image-select 
		  mode="edit" 
		  v-model="model"
			:list="[{text: '选项1', key: '选项1', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'}, {text: '选项2',  key: '选项2', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项3',  key: '选项3', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项4',  key: '选项4', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}, {text: '选项5',  key: '选项5', image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/2.jpg'}]"
		>
		</u-flowable-image-select>
</template>
<script>
export default {
    data() {
        return {
            model: ['选项1']
        }
    }
}
</script>
```
