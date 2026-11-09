# WorksheetFunction.Text

将数值转换为按指定数字格式表示的文本。



## 语法

express.**Text(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 数值、计算数值的公式或对数值所在单元格的引用。 |
| Arg2 | 必选 | string | 文本分类中的数字格式，该分类位于 **“单元格格式”** 对话框的 **“数字”** 选项卡上的 **“分类”** 框中。 |

## 返回值

String

## 示例


```JavaScript
/*本示例使用 Text 方法将数值转换为货币和日期格式表示的文本，并分别赋值给C2和C3单元格。*/
function test() {
    Range("C2").Value2 = WorksheetFunction.Text(2.236, "$#,##0.00")
    Range("C3").Value2 = WorksheetFunction.Text(48333, "yyyy-mm-dd")
}
```


```JavaScript
/*本示例为A2单元格赋值，使用 Text 方法将数值转换为百分比格式表示的文本。*/
function test() {
    Range("A2").Value2 = 0.2357
    alert(WorksheetFunction.Text(Range("A2").Value2, "0.00%"))
}
```
