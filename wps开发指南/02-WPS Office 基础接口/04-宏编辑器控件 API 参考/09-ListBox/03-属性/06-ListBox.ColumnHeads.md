# ListBox.ColumnHeads

您可以使用 ColumnHeads 属性指定列表框是否显示单行列标题

## 语法

express.ColumnHeads

express   一个代表 ListBox 对象的变量。

## 说明

您可以使用 ColumnHeads 属性指定列表框是否显示单行列标题。可以设置为以下值：

| 设置  | 值     | 描述     |
| --- | ----- | ------ |
| Yes | true  | 显示列标题  |
| No  | false | 不显示列标题 |


## 示例

```javascript
/*不显示ListBox1列表框的列标题*/
function func1()
{
    UserForm1.ListBox1.ColumnHeads = false
}
```
