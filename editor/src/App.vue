<template>
  <div id="app" :class="$style.content">
    <div :class="$style.view">
     <div :class="$style.colBoxTitle">属性的编辑栏</div>
          <div v-for="(childItem, key) in componentList" :key="key">
            <div :class="[$style.box, selectedNode.tag === key && $style.active]" @click="handleClick(key, childItem)">
              <div :class="$style.title">{{ allNodesAPI[key][0].title}}</div>
            <component 
                :is="childItem.name"
                v-bind="getProps(allNodesAPI[key])"
                mode="readonly">
              </component>
            </div>
          </div>
     
    </div>
    <div :class="$style.base">
          <div :class="$style.colBoxTitle">属性的配置后效果栏</div>
       <div v-for="(childItem, key) in componentList" :key="key">
          <div :class="[$style.resultbox, selectedNode.tag === key && $style.active]" @click="handleClick(key, childItem)">
            <div :class="$style.title">{{ allNodesAPI[key][0].title}}</div>
           <u-form-item :rules="getRules(allNodesAPI[key])">
            <component 
                :is="childItem.name"
                v-bind="getProps(allNodesAPI[key])"
                mode="edit">
              </component>
            </u-form-item>
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
/*

*/
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
    // 用平级结构和添加 group 属性处理校验规则，则在属性配置栏可以灵活调整属性的排序和位置
    getRules(api) {
      const rules = [];
      // api 的配置映射到组件的可读属性上
      api[0].attrs.forEach(attr => {
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
  width: 400px;
}
.content {
    display: flex;
}

.base {
  flex: 1;
  cursor: move;
  overflow: scroll;
  height: 500px;
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
