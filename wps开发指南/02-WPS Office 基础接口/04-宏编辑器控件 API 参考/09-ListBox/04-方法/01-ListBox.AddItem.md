# ListBox.AddItem

将新项目添加到指定列表框控件显示的值列表中。

## 语法

express.AddItem(Content, Index)

express   一个代表 ListBox 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Content | 必选 | String | 列表框里显示的文本内容 |
| Index | 必选 | Number | 该选项在列表框里的位置 |

## 说明

将新项目添加到指定列表框控件显示的值列表中。


## 示例

```javascript
/*将test0设置为ListBox1控件列表框中的第一个选项*/
function func1()
{
    UserForm1.ListBox1.AddItem("test0",0);
}
```
