# ComboBox.ColumnHeads

您可以使用 ColumnHeads 属性指定组合框是否显示单行列标题。

## 语法

express.ColumnHeads

express   一个代表 ComboBox 对象的变量。

## 说明

您可以使用 ColumnHeads 属性指定组合框是否显示单行列标题。可以设置为以下值：

| 设置  | 值     | 描述     |
| --- | ----- | ------ |
| Yes | true  | 显示列标题  |
| No  | false | 不显示列标题 |


## 示例

```javascript
/*不显示ComboBox1组合框的列标题*/
function func1()
{
	UserForm1.ComboBox1.ColumnHeads = false
}
```
