# Button组件
常用的按钮操作

<demo-block>
使用type属性来定义按钮的风格

::: slot source
<!-- <button-test1></button-test1> -->
<ed-button type="primary">主要按钮</ed-button>
<ed-button type="success">成功按钮</ed-button>
<ed-button type="warning">警告按钮</ed-button>
<ed-button type="info">提示按钮</ed-button>
<ed-button type="danger">危险按钮</ed-button>
:::

::: slot highlight
```html
<ed-button type="primary">主要按钮</ed-button>
<ed-button type="success">成功按钮</ed-button>
<ed-button type="warning">警告按钮</ed-button>
<ed-button type="info">提示按钮</ed-button>
<ed-button type="danger">危险按钮</ed-button>
```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-|
type|类型|string|primary/success/danger/info/warning|default
icon|图标类名|string| - |-
loading|是否显示加载中状态|boolean|true/false|false
position|图标位置|string| left / right | left