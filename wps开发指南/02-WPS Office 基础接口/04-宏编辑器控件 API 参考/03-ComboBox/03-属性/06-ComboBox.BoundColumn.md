# ComboBox.BoundColumn

您可以使用该属性指定是否将列表框里第一个选项的文本显示出来。

## 语法

express.BoundColumn

express   一个代表 ComboBox 对象的变量。

## 说明

您可以使用该属性指定是否将列表框里第一个选项的文本显示出来，可以设置为以下值：

| 设置  | 值 | 描述          |
| --- | - | ----------- |
| 显示  | 0 | 显示第一个选项的文本  |
| 不显示 | 1 | 不显示第一个选项的文本 |


## 示例

```javascript
/*显示ComboBox1列表框里第一个选项的值*/
function func1()
{
	UserForm1.ComboBox1.BoundColumn = 0
}
```
