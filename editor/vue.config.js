module.exports = {
  chainWebpack: (config) => {
		config.module.rule('yaml')
		.test(/\.ya?ml$/)
		.type('json')
		.use('yaml-loader')
		.loader('yaml-loader')
		.end();
  },
  css: {
    loaderOptions: {
			less: {
				extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            less: {
                javascriptEnabled: true //less 配置
            }
        }, // css预设器配置项
        modules: false // 启用 CSS modules for all css / pre-processor files
			}
    }
  }
}