# CommandButton.BackStyle

您可以使用该属性指定控件是否透明。

## 语法

express.BackStyle

express   一个代表 CommandButton 对象的变量。

## 说明

您可以使用该属性指定控件是否透明。

| 设置          | 值 | 描述                                                  |
| ----------- | - | --------------------------------------------------- |
| Normal      | 1 | （除option group以外的所有控件的默认值）控件内部的颜色是由BackColor属性设置的颜色 |
| Transparent | 0 | （option group的默认值）控件是透明的，控件后面的窗体和报表是可见的             |


## 示例

```javascript
/*将该CommandButton设置为透明*/
function func1()
{
	UserForm1.CommandButton1.BackStyle = 0
}
```
