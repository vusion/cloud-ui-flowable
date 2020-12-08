<template>
  <div id="app" :class="$style.content">
    <div :class="$style.view">
     <div :class="$style.colBoxTitle">属性的编辑栏</div>
          <div v-for="(childItem, key) in componentList" :key="key">
            <div :class="[$style.box, selectedNode.tag === key && $style.active]" @click="handleClick(key, childItem)">
              <div :class="$style.title">{{ (allNodesAPI[key] || {}).title }}</div>
            <component 
                :key="key + 'edit'"
                :is="childItem.name"
                v-bind="getProps(allNodesAPI[key])"
                mode="readonly">
              </component>
            </div>
          </div>
     
    </div>
    <div :class="$style.panel">
       <div :class="$style.colBoxTitle">属性的配置后效果栏（绑定 v-model，表单的可以得到的输入值）</div>
      <u-flowable-form gap="large">
        <div v-for="(childItem, key) in componentList" :key="key">
        <div :class="[$style.resultbox, selectedNode.tag === key && $style.active]" @click="handleClick(key, childItem)">
              <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-address'">
                <u-flowable-address
                    :key="key + getProps(allNodesAPI[key]).required"
                    v-model="modelGroup.UFlowableAddress"
                    v-bind="getProps(allNodesAPI[key])"
                    mode="edit">
                </u-flowable-address>
              </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-checkbox'">
                <component 
                    :key="key + getProps(allNodesAPI[key]).required"
                    :is="childItem.name"
                    v-model="modelGroup.UFlowableCheckBox"
                    v-bind="getProps(allNodesAPI[key])"
                    mode="edit">
                </component>
             </u-flowable-form-item>
             <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-date-time-range'">
             <component 
                :is="childItem.name"
                :key="key + getProps(allNodesAPI[key]).required"
                v-model="modelGroup.UFlowableDateTimeRange"
                v-if="childItem.name === 'u-flowable-date-time-range'"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
                </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-date-time'">
               <component 
                :is="childItem.name"
                :key="key + getProps(allNodesAPI[key]).required"
                v-model="modelGroup.UFlowableDateTime"
                v-if="childItem.name === 'u-flowable-date-time'"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
               </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-email'">
                <component 
                  :is="childItem.name"
                  :key="key + getProps(allNodesAPI[key]).required"
                  v-model="modelGroup.UFlowableEmail"
                  v-if="childItem.name === 'u-flowable-email'"
                  v-bind="getProps(allNodesAPI[key])"
                  mode="edit">
                </component>
               </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-image-select'">
                <component 
                :is="childItem.name"
                :key="key + getProps(allNodesAPI[key]).required"
                v-model="modelGroup.UFlowableImageSelect"
                v-if="childItem.name === 'u-flowable-image-select'"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
              </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-link'">
                <component 
                  :is="childItem.name"
                  :key="key + getProps(allNodesAPI[key]).required"
                  v-model="modelGroup.UFlowableLink"
                  v-if="childItem.name === 'u-flowable-link'"
                  v-bind="getProps(allNodesAPI[key])"
                  mode="edit">
                </component>
               </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-mobile'">
                  <component 
                    :is="childItem.name"
                    :key="key + getProps(allNodesAPI[key]).required"
                    v-if="childItem.name === 'u-flowable-mobile'"
                    v-bind="getProps(allNodesAPI[key])"
                    mode="edit">
                  </component>
               </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-number'">
                <component 
                  :is="childItem.name"
                  :key="key + getProps(allNodesAPI[key]).required"
                  v-model="modelGroup.UFlowableNumber"
                  v-if="childItem.name === 'u-flowable-number'"
                  v-bind="getProps(allNodesAPI[key])"
                  mode="edit">
                </component>
              </u-flowable-form-item>
              <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-radios'">
                <component 
                  :is="childItem.name"
                  :key="key + getProps(allNodesAPI[key]).required"
                  v-model="modelGroup.UFlowableRadios"
                  v-if="childItem.name === 'u-flowable-radios'"
                  v-bind="getProps(allNodesAPI[key])"
                  mode="edit">
                </component>
              </u-flowable-form-item>
              <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-rich-text'">
                <component 
                  :is="childItem.name"
                    :key="key + getProps(allNodesAPI[key]).required"
                  v-model="modelGroup.UFlowableRichText"
                  v-if="childItem.name === 'u-flowable-rich-text'"
                  v-bind="getProps(allNodesAPI[key])"
                  mode="edit">
                </component>
               </u-flowable-form-item>
              <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-select'">
               <component 
                :is="childItem.name"
                :key="key + getProps(allNodesAPI[key]).required"
                v-model="modelGroup.UFlowableSelect"
                v-if="childItem.name === 'u-flowable-select'"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
               </u-flowable-form-item>
              <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-string'">
              <component 
                :is="childItem.name"
                :key="key + getProps(allNodesAPI[key]).required"
                v-model="modelGroup.UFlowableString"
                v-if="childItem.name === 'u-flowable-string'"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
              </u-flowable-form-item>
              <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-text'">
               <component 
                :is="childItem.name"
                :key="key + getProps(allNodesAPI[key]).required"
                v-model="modelGroup.UFlowableText"
                v-if="childItem.name === 'u-flowable-text'"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
              </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-textarea'">
               <component 
                :is="childItem.name"
                :key="key + getProps(allNodesAPI[key]).required"
                v-model="modelGroup.UFlowableTextarea"
                v-if="childItem.name === 'u-flowable-textarea'"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
              </u-flowable-form-item>
               <u-flowable-form-item :title="(allNodesAPI[key] || {}).title" tip="提示信息" v-if="childItem.name === 'u-flowable-uploader'">
             <component 
                :is="childItem.name"
                :key="key + getProps(allNodesAPI[key]).required"
                v-model="modelGroup.UFlowableUploader"
                v-if="childItem.name === 'u-flowable-uploader'"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
           </u-flowable-form-item>
           </div>
        </div>
        </u-flowable-form>
    </div>
     <div :class="$style.base">
       <div :class="$style.colBoxTitle">配置（展示组件和组件的配置）</div>
       <div v-for="(childItem, key) in componentList" :key="key">
       <div :class="[$style.resultbox, selectedNode.tag === key && $style.active]" @click="handleClick(key, childItem)">
        <div :class="$style.title">{{ (allNodesAPI[key] || {}).title}}</div>
        <u-flowable-form-item>
          <component 
            :key="key + 'config'"
            :is="childItem.name"
            v-bind="getProps(allNodesAPI[key])"
            mode="edit">
          </component>
        </u-flowable-form-item>
        </div>
     </div>
    </div>
        
    <div :class="$style.attrBox">
      <s-component-property-panel 
        :allNodesAPI="allNodesAPI"
        :selectedNode="selectedNode"
        :services="services"
        :componentName="componentName"
        :view="view"
      >
    </s-component-property-panel>
    </div>
  </div>
</template>

<script>
import SComponentPropertyPanel from './s-component-property-panel';
import * as componentList from '../../src/components';
import yamls from './apis';
import { formatvalidateObject, getProps } from './tools';

export default {
  name: 'App',
  components: {
    SComponentPropertyPanel,
  },
  data() {
    return {
      services: [{
        value: 'service'
      }],
      view: {
        node: '',
      },
      modelGroup: {
        UFlowableAddress: '',
        UFlowableCheckBox: [],
        UFlowableDateTimeRange: '',
        UFlowableDateTime: '',
        UFlowableEmail: '',//
        UFlowableImageSelect: [],
        UFlowableLink: '', 
        UFlowableMobile: '',
        UFlowableNumber: 0,
        UFlowableRadios: '',//
        UFlowableRichText: '',
        UFlowableSelect: '',
        UFlowableString: '',
        UFlowableText: '',
        UFlowableTextarea: '',//
        UFlowableUploader: [],
      },
      componentList,
      componentName: 'UFlowableText',
      allNodesAPI: yamls,
      validate: [],
      rules: '',
      selectedNode: {
        tag: 'UFlowableText',
        attrsMap: {
          ref: '',
          arguments: [{
            currentValue: ''
          }],
          hasOwnProperty: Object.hasOwnProperty,
        },
        children: [{

        }]
      }
    }
  },
  methods: {
    submit() {
      // console.info('result', this.modelGroup);
      alert(JSON.stringify(this.modelGroup, null, 2))
    },
    // TODO 用平级结构和添加 group 属性处理校验规则，则在属性配置栏可以灵活调整属性的排序和位置
    getRules(api) {
      const rules = [];
      // api 的配置映射到组件的可读属性上
      api.attrs.forEach(attr => {
        if (attr.group === 'validate') {
          // 验证规则配置与解析
          rules.push(formatvalidateObject(attr))
        }
      })
      return rules;
    },
    getProps,
    handleClick(key) {
      // 更新当前选中的 tag 名称
      this.selectedNode = {
        tag: key,
      }
    }
  }
}
</script>
<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.colBoxTitle {
  margin-top: 10px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
}

.resultbox {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 10px;
}
.title {
  font-weight: 500;
  font-size: 15px;
}

.active {
  background: rgba(101,140,243, 0.1);
}
.view {
  width: 200px;
}
.content {
    display: flex;
}

.panel {
  flex: 1;
  cursor: move;
  height: 800px;
  border: 1px solid #eee;
  overflow: scroll;
}

.base {
  flex: 1;
  cursor: move;
  overflow: scroll;
  height: 800px;
  border: 1px solid #eee;
}
.attrBox {
  width: 300px;
}

.box {
  margin: 10px;
  padding: 10px;
  border: 1px solid green;
  min-height: 20px;
  border-radius: 4px;
}
</style>
