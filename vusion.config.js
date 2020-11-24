const pkg = require('./package.json');

module.exports = {
    type: 'library',
    name: 'cloud-ui-flowable',
    CamelName: 'CloudUIFlowable',
    docs: {
        title: 'Cloud UI Flowable 组件库',
        logo: '组件库',
        github: 'https://github.com/vusion/cloud-ui-flowable',
        package: pkg,
        navbar: [
            { text: '文档', to: '/docs' },
            { text: '基础组件', to: '/components' },
        ],
        components: [
            { group: 'Basic', name: 'u-flowable-text', alias: '描述文字' },
            { group: 'Basic', name: 'u-flowable-string', alias: '单行文字' },
            { group: 'Basic', name: 'u-flowable-textarea', alias: '多行文字' },
            { group: 'Basic', name: 'u-flowable-date-time', alias: '日期' },
            { group: 'Basic', name: 'u-flowable-email', alias: '邮箱' },
            { group: 'Basic', name: 'u-flowable-mobile', alias: '手机' },
            { group: 'Basic', name: 'u-flowable-number', alias: '数字' },
            { group: 'Basic', name: 'u-flowable-link', alias: '链接' },
            { group: 'Basic', name: 'u-flowable-radios', alias: '单选项' },
            { group: 'Basic', name: 'u-flowable-select', alias: '下拉选择' },
            { group: 'Basic', name: 'u-flowable-checkbox', alias: '多项选择' },
            { group: 'Basic', name: 'u-flowable-uploader', alias: '附件上传' },
            { group: 'Basic', name: 'u-flowable-date-time-range', alias: '起止时间' },
            { group: 'Basic', name: 'u-flowable-image-select', alias: '图片选择' },
            { group: 'Basic', name: 'u-flowable-rich-text', alias: '富文本' },
            { group: 'Basic', name: 'u-flowable-address', alias: '地址' },
        ],
        blocks: [],
        directives: [

        ],
        filters: [],
        utils: [

        ],
    },
};
