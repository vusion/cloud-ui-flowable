import 'baseCSS';
export * from './components';

import * as directives from './directives';
import * as filters from './filters';
export { directives, filters };

export { install } from '@vusion/utils';

import Vue from 'vue';
Vue.prototype.$env = Vue.prototype.$env || {};
Vue.prototype.$env.VUE_APP_DESIGNER = String(process.env.VUE_APP_DESIGNER) === 'true';
