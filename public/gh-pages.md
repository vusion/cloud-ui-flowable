

## 构建 gh-pages 的说明 

[Github Pages Setting](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)

`yarn run build:docs` 会生成构建产物

但是因为这是基于 cloud-ui 的一组组件，所以还需要引入 CloudUI， 否则会报错

```html
	<link rel="stylesheet" href="https://unpkg.com/cloud-ui.vusion/dist/index.css">
	<script type="text/javascript" src="https://static-vusion.163yun.com/packages/vue@2/dist/vue.min.js"></script>
    <script src="https://unpkg.com/cloud-ui.vusion/dist/index.js"></script>
    <script>
        Vue.use(CloudUI);
  </script>
```

发布的时候只需要发布 public 文件夹下面的内容 的内容

## TODO
  

