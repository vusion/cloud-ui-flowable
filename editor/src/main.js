import Vue from 'vue'
import App from './App.vue'
import 'themeCSS';
import 'baseCSS';
export { install } from '@vusion/utils';
import * as CloudUI from 'cloud-ui.vusion';
import 'cloud-ui.vusion.css';

Vue.use(CloudUI); // 全局安装组件库中的组件、指令等

// 测试库
import * as Lib from '../../src';

Vue.use(Lib);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
