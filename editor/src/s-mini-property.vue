<template> 
<div>
  <span v-if="attr.level === 'component'" :class="$style.label" slot="label">
   <span v-if="attr.type === 'richtext'" :class="$style.label" slot="label">
      <span :class="$style.title">{{ attr.title || attr.name }}</span>
      <div  :class="$style.box">
          <u-flowable-rich-text mode="edit"  v-model="currentComponent[attr.name]">
          </u-flowable-rich-text>
      </div>
  </span>
  <span v-else-if="attr.type === 'input'" :class="$style.label" slot="label">
      <span :class="$style.title">{{ attr.title || attr.name }}</span>
      <div  :class="$style.box">
          <u-input mode="edit"  v-model="currentComponent[attr.name]">
          </u-input>
      </div>
  </span>
  </span>
<span v-else>
  <span v-if="attr.type === 'richtext'" :class="$style.label" slot="label">
      <span :class="$style.title" >{{ attr.title || attr.name }}</span>
      <div  :class="$style.box">
          <u-flowable-rich-text mode="edit" v-model="attr.value">
          </u-flowable-rich-text>
      </div>
  </span>
  <span v-else-if="attr.type === 'input'" :class="$style.label" slot="label">
      <span :class="$style.title">{{ attr.title || attr.name }}</span>
      <div  :class="$style.box">
          <u-input mode="edit" v-model="attr.value">
          </u-input>
      </div>
  </span>
  <span v-else-if="attr.type === 'checkbox'" :class="$style.label" slot="label">
      <u-checkbox mode="edit" v-model="attr.value">
      </u-checkbox>
      <span>{{ attr.title || attr.name }}</span>
  </span>
   <span v-else-if="attr.type === 'rangeBox'" :class="$style.label" slot="label">
      <u-checkbox mode="edit" v-model="attr.value">
      </u-checkbox>
      <span>{{ attr.title || attr.name }}</span>
      <span v-if="attr.value"> 
        <u-input v-model="attr.min" placeholder="不限"></u-input> ~  <u-input v-model="attr.max" placeholder="不限"></u-input>
      </span>
  </span>
  <span v-else-if="attr.type === 'customize'" :class="$style.label">
      <div :class="$style.title" >{{ attr.title || attr.name }}</div>
      <u-select :class="$style.customizeSelect" v-model="attr.customizeType" :data-source="list"></u-select>
      <component 
        :is="currentComponent.name"
        v-model="attr.value"
        v-bind="getProps(allNodesAPI[tag])"
        mode="edit">
     </component>
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

.title {
    display: block;
    margin-bottom: 5px;
}

.label {
    position: relative;
    font-weight: 500;
    margin-top: 5px;
    display: inline-block;
}
</style>