

/**
 * 对验证规则的配置灵活支持多种场景
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
		if (attr.min && attr.name) {
			validateConfig.message = `字数限制为 ${attr.min} - ${attr.max}`;
		}
	}
	
	return validateConfig;
}

export function getProps(api) {
	// 显示属性的key 和值
	const props = {};
	((api || {}).attrs || []).forEach(attr => {
		Object.assign(props, { [attr.name] : attr.value })

	})
	// 添加 name 参数
	Object.assign(props, { name : (api || {}).name });
	Object.assign(props, { required : true});
	return props;
}