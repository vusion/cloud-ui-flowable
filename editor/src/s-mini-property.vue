<template> 
<div>
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
  <span v-else-if="attr.compType === 'capsules'" :class="$style.label" slot="label">
      <div :class="$style.title" >{{ attr.title || attr.name }}</div>
      <u-capsules v-model="attr.value">
          <u-capsule value="25">25</u-capsule>
          <u-capsule value="50">50</u-capsule>
          <u-capsule value="75">75</u-capsule>
          <u-capsule value="100">100</u-capsule>
      </u-capsules>
  </span>
  <span v-else-if="attr.compType === 'checkbox'" :class="$style.label" slot="label">
      <u-checkbox v-model="attr.value">
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
      :get-default-item="() => ({ image: 'https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg', text: '未命名'})"
      :data="getProps(allNodesAPI[tag]).list" 
      :class="$style.formTable" dynamic>
         <u-form-table-view-column>
            <template slot="cell" slot-scope="{ item, rowIndex }">
                <div :class="$style.columnBox" :key="'imageList'+rowIndex">
                  <u-checkbox :class="$style.imageCheckBox" v-model="item.value" @input="updateImageCheck(rowIndex, $event)">
                  </u-checkbox>
                  <u-image :src="item.image" fit="fill" :class="$style.image"></u-image>
                  <u-input size="huge full" :class="$style.imageInputBox" v-model="item.text"></u-input>
                </div>
            </template>
        </u-form-table-view-column>
     </u-form-table-view>
  </span>
   <span v-else-if="attr.compType === 'rangeBox'" :class="$style.label" slot="label">
      <u-checkbox v-model="attr.value">
      </u-checkbox>
      <span>{{ attr.title || attr.name }}</span>
      <span v-if="attr.value"> 
        <u-input v-model="attr.min" placeholder="不限"></u-input> ~  <u-input v-model="attr.max" placeholder="不限"></u-input>
      </span>
  </span>
    <span v-else-if="attr.compType === 'pointBox'" :class="$style.label" slot="label">
      <u-checkbox v-model="attr.value">
      </u-checkbox>
      <span>{{ attr.title || attr.name }}</span>
      <span v-if="attr.value"> 
        限制<u-input v-model="attr.decimal" placeholder="不限制"></u-input>位
      </span>
  </span>
  <span v-else-if="attr.compType === 'customize'" :class="$style.label">
      <div :class="$style.title" >{{ attr.title || attr.name }}</div>
      <u-select :class="$style.customizeSelect" v-model="attr.customizeType" :data-source="list"></u-select>
      <div v-if="!attr.customizeConfig">
        <component 
            :is="currentComponent.name"
            v-model="attr.value"
            v-bind="getProps(allNodesAPI[tag])"
            mode="edit">
        </component>
    </div>
     <div v-else>
         <component 
            :is="attr.customizeConfig.name || currentComponent.name"
            v-model="attr.value"
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
        updateValue(rowIndex, $event) {
            // 输入框不带 key 输入，但是 radio 选中需要 key
            this.$set(getProps(this.allNodesAPI[this.tag]).list, rowIndex, {
                key: $event,
                value: $event,
                text: $event,
            })
        },
        updateImageCheck(rowIndex, $event) {
            console.info(rowIndex);
            console.info('event', $event);
            const rowItem = getProps(this.allNodesAPI[this.tag]).list[rowIndex];
            // 输入框不带 key 输入，但是 radio 选中需要 key
            this.$set(getProps(this.allNodesAPI[this.tag]).list, rowIndex, Object.assign(rowItem, {
                value: $event,
            }))
        },
        customizeConfigSelect(list){
            return list.map((o) => {
                // 下拉框需要 text 这个属性
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

.image {
    width: 30px;
    height: 30px;
    margin-left: 40px;
    position: ABSOLUTE;
    z-index: 1;
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
}
</style>