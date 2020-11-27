

/**
 * 对验证规则的配置更灵活
 */
export function formatvalidateObject(attr) {
	const validateConfig = { 
		validate: attr.name, 
		required: attr.value,
		trigger: 'blur',
		message: attr.message
	};

	if (attr.min) {
		validateConfig.min = attr.min;
	}

	if (attr.min) {
		validateConfig.max = attr.max; 
	}

	if (attr.name === 'duplicate') {
		// TODO 真实验证重复是需要动态配置请求接口信息的，这请求接口信息和当前表单有关联
		validateConfig.validate = function validate(value) {
			return new Promise((resolve) => {
					// 这里模拟一个异步请求
					setTimeout(() => {
							resolve(!['abcd', 'aaaa', 'ABCD'].includes(value));
					}, 200);
			});
		}
	}
	// TODO 完善的范围
	if (attr.name === 'range') {
		console.info('range validate', validateConfig);
		validateConfig.message = `字数限制为 ${attr.min} - ${attr.max}`;
	}
	return validateConfig;
}

export function getProps(api) {
	// 显示属性的key 和值
	const props = [];
	api[0].attrs.forEach(attr => {
		if (attr.group !== 'validate') {
			props.push({ [attr.name] : attr.value })
		}
	})
	
	return props;
}