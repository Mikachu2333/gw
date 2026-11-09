# TextFrame.Characters

返回一个 **Characters** 对象，该对象表示某个形状的文本框架中的字符区域。可以使用 **Characters** 对象向文本框架中添加字符和设置字符的格式。



## 语法

express.**Characters(Start, Length)**

express   一个代表 **TextFrame** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | any | 要返回的第一个字符。如果此参数设置为 1 或被省略，则 Characters 方法将返回以第一个字符为起始字符的字符区域。 |
| Length | 可选 | any | 要返回的字符个数。如果省略此参数，则 Characters 方法将返回该字符串的剩余部分（由 Start 参数设置的字符以后的所有字符）。 |

## 返回值

Characters

## 说明


 **Characters** 对象不是集合。



## 示例


```JavaScript
/*本示例将活动工作表中第一个形状的文本框架中第三个字符的格式设置为加粗。*/
function test() {
    let textFrame = Application.ActiveSheet.Shapes.Item(1).TextFrame
    textFrame.Characters().Text = "abcdefg"
    textFrame.Characters(3, 1).Font.Bold = true
}
```


```JavaScript
/*本示例显示第一张工作表中第二个形状的文本框架中字符的数量。*/
function test() {
    let textFrame = Application.Worksheets.Item(1).Shapes.Item(2).TextFrame
    textFrame.Characters().Text = "hello"
    alert(textFrame.Characters().Count)
}
```
