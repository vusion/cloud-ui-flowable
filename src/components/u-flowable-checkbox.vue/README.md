<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFlowableCheckbox 多选组

- [API]()
    - [Props/Attrs](#propsattrs)

**Basic**

多项中选择一个时使用

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 标题用于告诉填写者应该在该字段中输入什么样的内容，通常是一个词语或词组，也可以是一个问题 |
| min | number |  | `0` | 可以勾选多选框的最小数量 |
| max | number |  | `Infinity` | 可以勾选多选框的最大数量 |
| list | Array |  |  | 为选择组件提供具体内容（可以添加“其他”选项，用作选项不符时的自定义填写），可以自定义编辑、增删、批量编辑选项。 |
| value | string |  |  | 文本内容，多个选项以英文逗号隔开 |

