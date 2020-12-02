# Vusion Cloud UI

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/cloud-ui-flowable.vusion.svg?style=flat-square
[npm-url]: http://npmjs.org/package/cloud-ui-flowable.vusion
[david-img]: http://img.shields.io/david/vusion/cloud-ui-flowable.svg?style=flat-square
[david-url]: https://david-dm.org/vusion/cloud-ui-flowable
[download-img]: https://img.shields.io/npm/dm/cloud-ui-flowable.vusion.svg?style=flat-square
[download-url]: https://npmjs.org/package/cloud-ui-flowable.vusion

## Install
``` shell
npm install --save cloud-ui-flowable.vusion
```

## QuickStart

``` javascript
import Vue from 'vue';
import * as CloudUIFlowable from 'cloud-ui-flowable.vusion/dist';
import 'cloud-ui-flowable.vusion/dist/index.css';
// 如需引入其他主题，将上面的路径替换为如下不同的主题样式
// import 'cloud-ui-flowable.vusion/dist/theme-dark.css';

Vue.use(CloudUIFlowable); // 全局安装组件库中的组件、指令等
```

### find-by-re

通过正则表达式查找

``` shell
bin/find-by-re ./src '<u-input[\s\S]{0,300}close'
```

## Development

### npm install

安装

### npm run dev

本地开发预览组件 visit 'http://localhost:9001'

预览组件的配置效果
```
 cd editor
 yarn 
 yarn serve
````
visit 'http://localhost:8080'

### gh-pages

[Github Pages Doc](https://github.com/vusion/cloud-ui-flowable/blob/master/public/gh-pages.md)

## Changelog

See [Releases](https://github.com/vusion/cloud-ui-flowable/releases)

## Contributing

See [Contributing Guide](https://github.com/vusion/DOCUMENTATION/issues/8)

## License

[MIT](LICENSE)
