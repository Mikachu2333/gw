# ComboBox.AddItem

将新项目添加到指定组合框控件显示的值列表中。

## 语法

express.AddItem(Content, Index)

express   一个代表 ComboBox 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Content | 必选 | String | 组合框里显示的文本内容 |
| Index | 必选 | Number | 该选项在组合框里的位置 |

## 说明

将新项目添加到指定组合框控件显示的值列表中。


## 示例

```javascript
/*将test0设置为ComboBox1控件组合框中的第一个选项*/
function func1()
{
	UserForm1.ComboBox1.AddItem("test0",0);
}
```
