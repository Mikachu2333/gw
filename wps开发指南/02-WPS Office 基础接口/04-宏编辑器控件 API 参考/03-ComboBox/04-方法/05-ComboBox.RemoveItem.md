# ComboBox.RemoveItem

从指定组合框控件显示的值列表中删除项目。

## 语法

express.RemoveItem(index)

express   一个代表 ComboBox 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| index | 可选 | Number | 删除列表框中index指定的下标的值 |

## 说明

从指定组合框控件显示的值列表中删除项目。


## 示例

```javascript
/*删除ComboBox1中下标为3的值*/
function func1()
{
	UserForm1.ComboBox1.RemoveItem(3)
}
```
