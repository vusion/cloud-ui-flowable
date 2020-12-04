<template> 
<div :class="$style.defaultContent">
  <span v-if="attr.level === 'component'" :class="$style.label" slot="label">
        <span v-if="attr.compType === 'richtext'" :class="$style.label" slot="label">
            <span :class="$style.title">{{ attr.title || attr.name }}</span>
            <div  :class="$style.box">
                <u-flowable-rich-text mode="edit"  v-model="currentComponent[attr.name]">
                </u-flowable-rich-text>
            </div>
        </span>
        <span v-else-if="attr.compType === 'input'" :class="$style.label" slot="label">
            <span :class="$style.title">{{ attr.title || attr.name }}</span>
            <div  :class="$style.box">
                <u-input v-model="currentComponent[attr.name]">
                </u-input>
            </div>
        </span>
 </span>
<span v-else>
  <span v-if="attr.compType === 'richtext'" :class="$style.label" slot="label">
      <span :class="$style.title" >{{ attr.title || attr.name }}</span>
      <div  :class="$style.box">
          <u-flowable-rich-text mode="edit" v-model="attr.value">
          </u-flowable-rich-text>
      </div>
  </span>
  <span v-else-if="attr.compType === 'input'" :class="$style.label" slot="label">
      <span :class="$style.title">{{ attr.title || attr.name }}</span>
      <div  :class="$style.box">
          <u-input v-model="attr.value">
          </u-input>
      </div>
  </span>
  <span v-else-if="attr.compType === 'number'">
      <span :class="$style.title">{{ attr.title || attr.name }}</span>
      <div  :class="$style.box">
        <u-number-input v-model="attr.value" v-bind="$attrs"></u-number-input>
     </div>
  </span>
   <span v-else-if="attr.compType === 'timeFormat'" :class="$style.label">
      <div :class="$style.title">{{ attr.title || attr.name }}</div>
      <div  :class="$style.box">
        <u-select v-model="attr.value" :data-source="getProps([attr.compConfig]).list"></u-select>
     </div>
  </span>
  <span v-else-if="attr.compType === 'capsules'" :class="$style.label" slot="label">
      <div :class="$style.title" >{{ attr.title || attr.name }}</div>
      <u-capsules :key="'propety'+attr.compType" v-model="attr.value">
          <u-capsule value="25">25</u-capsule>
          <u-capsule value="50">50</u-capsule>
          <u-capsule value="75">75</u-capsule>
          <u-capsule value="100">100</u-capsule>
      </u-capsules>
  </span>
  <span v-else-if="attr.compType === 'checkbox'" :class="$style.label" slot="label">
      <u-checkbox v-model="attr.value" :key="'propety'+attr.compType" >
      </u-checkbox>
      <span>{{ attr.title || attr.name }}</span>
  </span>
  <span v-else-if="attr.compType === 'inputList'" :class="$style.label" slot="label">
      <span>{{ attr.title || attr.name }}</span>
      <u-form-table-view key="inputList" size="mini" :data="getProps(allNodesAPI[tag]).list" :class="$style.formTable" dynamic>
         <u-form-table-view-column>
            <template slot="cell" slot-scope="{ item, rowIndex }">
                <u-input size="huge full" :key="'inputList'+rowIndex" v-model="item.value" @input="updateValue(rowIndex, $event)"></u-input>
            </template>
        </u-form-table-view-column>
     </u-form-table-view>
  </span>
   <span v-else-if="attr.compType === 'imageList'" :class="$style.label" slot="label">
      <span>{{ attr.title || attr.name }}</span>
      <u-form-table-view key="imageList" size="mini" 
      :get-default-item="getImageListDefaultItem"
      :data="getProps(allNodesAPI[tag]).list" 
      :class="$style.formTable" dynamic>
         <u-form-table-view-column>
            <template slot="cell" slot-scope="{ item, rowIndex }">
                <div :class="$style.columnBox" :key="'imageList'+rowIndex">
                  <u-checkbox :class="$style.imageCheckBox" v-model="item.value" @input="updateImageListValue(rowIndex, $event)">
                  </u-checkbox>
                  <u-uploader :class="$style.uploadImage" v-model="item.files" list-type="image"
                        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                        url="http://localhost:7000/api/library/upload">
                  </u-uploader>
                  <u-input size="huge full" :class="$style.imageInputBox" v-model="item.text"></u-input>
                </div>
            </template>
        </u-form-table-view-column>
     </u-form-table-view>
  </span>
   <span v-else-if="attr.compType === 'rangeBox'" :class="$style.label" slot="label">
      <u-checkbox v-model="attr.value" :key="'propety'+attr.compType" >
      </u-checkbox>
      <span>{{ attr.title || attr.name }}</span>
      <span v-if="attr.value"> 
        <u-input v-model="attr.min" placeholder="不限"></u-input> ~  <u-input v-model="attr.max" placeholder="不限"></u-input>
      </span>
  </span>
    <span v-else-if="attr.compType === 'pointBox'" :class="$style.label" slot="label">
      <u-checkbox v-model="attr.attrSwitch" :key="'propety'+attr.compType" @input="checkPointBox($event)">
      </u-checkbox>
      <span>{{ attr.title || attr.name }}</span>
      <div v-if="attr.attrSwitch" :class="$style.pointBox"> 
        限制<u-number-input size="mini" v-model="attr.value" placeholder="不限制"></u-number-input>位
      </div>
  </span>
  <span v-else-if="attr.compType === 'customize'" :class="$style.label">
      <div :class="$style.title" >{{ attr.title || attr.name }}</div>
      <u-select :key="'propety'+attr.compType" :class="$style.customizeSelect" v-model="attr.customizeType" :data-source="list"></u-select>
      <div v-if="!attr.customizeConfig">
        <component 
            :is="currentComponent.name"
            v-model="attr.value"
            :key="'propety' + currentComponent.name"
            v-bind="getProps(allNodesAPI[tag])"
            mode="edit">
        </component>
    </div>
     <div v-else>
         <component 
            :is="attr.customizeConfig.name || currentComponent.name"
            v-model="attr.value"
            :key="'propety' + (currentComponent.name)"
            v-bind="attr.customizeConfig.attrsMap"
            :data-source="getProps(allNodesAPI[tag]).list"
            mode="edit">
        </component>
     </div>
  </span>
 </span>
</div>
</template>
<script>
import { getProps } from './tools';
export default {
    name: 's-min-property',
    props: {
      allNodesAPI: Object,
      tag: String, 
      attr: Object,
      currentComponent: Object, // 当前的完整组件，因为属性配置也设计到组件的的基础信息新改动
    },
    data() {
        return {
           list: [
            { text: '自定义', value: 'normal' },
           ]
        }
    },
    methods: {
        getProps,
        checkPointBox($event) {
            // reset point to zero, if point is not allowed
            if (!$event) {
                this.attr.value = 0;
            }
        },
        updateValue(rowIndex, $event) {
            // 输入框不带 key 输入，但是 radio 选中需要 key
            this.$set(getProps(this.allNodesAPI[this.tag]).list, rowIndex, {
                key: $event,
                value: $event,
                text: $event, // 下拉框初始化需要 text
            })
        },
        getImageListDefaultItem() {
            /* 所以用名字作为唯一标记， 没有添加 key，是为了避免避免需要同步更新 key*/
            const len = getProps(this.allNodesAPI[this.tag]).list.length + 1;
            return { 
                // 默认图片地址
                files: [{
                    url: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg'
                }], 
                text: '未命名'+ len
            }
        },
        updateImageListValue() {
            const result = [];
            // 选出选中的元素添加到 value 里面
            (getProps(this.allNodesAPI[this.tag]).list || []).forEach(item => {
                if (item.value) {
                    result.push(item.text)
                }
            });
            // 确保更新的是同一个属性对象
            ((this.allNodesAPI[this.tag][0].attrs || []).find((o) => (o.name === 'value'))).value = result;
        },
        customizeConfigSelect(list){
            return list.map((o) => {
                // 使用 text 而不是 label 是因为下拉框需要 text 这个属性
                return {
                    key: o.value,
                    value: o.value,
                    text: o.value,
                }
            })
        }
    }
}
</script>
<style module>
.box {
    width: 200px;
}

.customizeSelect {
    margin-bottom: 10px;
}

.uploadImage {
    width: 30px;
    height: 30px;
    margin-left: 40px;
    position: absolute;
    z-index: 1;
}

.uploadImage div[list-type=image] {
   height: 30px;
   top: 0;
   position: absolute;
   z-index: -1;
}

.uploadImage div[list-type=image] img{
   width: 30px;
}

/* updoad-item 的样式 */
.uploadImage div[list-type=image]>div{
   padding: 0;
   border: none;
}

.pointBox {
   display: flex;
   margin: 10px 0;
}

.title {
    display: block;
    margin-bottom: 5px;
}

.columnBox {
    display:flex;
    align-items: center;
}

.imageCheckBox {
    position: absolute;
    z-index: 1;
    margin-left: 10px;
}

.imageInputBox input{
   padding-left: 80px;
}

.imageInputBox input:hover{
   outline: var(--focus-outline);
}

.inputListBox thead{
    display: none;
}

.inputListBox table{
   width: 100%;
}

.formTable {
    width: 100%!important;
}
.formTable table{
    width: 100%!important;
}

.formTable table [dynamic]{
    width: 25px!important;
}

.formTable thead {
    display: none;
}

.label {
    position: relative;
    font-weight: 500;
    margin-top: 5px;
    display: inline-block;
    /* 控制地址配置输入框的换行 */
    width:200px;
}

</style>