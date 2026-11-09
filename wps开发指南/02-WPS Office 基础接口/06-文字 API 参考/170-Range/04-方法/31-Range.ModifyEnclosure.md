# Range.ModifyEnclosure

添加、修改或删除指定字符周围的圈号。



## 语法

express.**ModifyEnclosure(Style, Symbol, EnclosedText)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | any | 圈号的样式。可以是任意 **WdEncloseStyle** 常量。 |
| Symbol | 可选 | any | 用于圈住指定区域的符号。可以是任意 **WdEnclosureType** 常量。 |
| EnclosedText | 可选 | any | 要圈住的字符。如果包括该参数，则 WPS 将用被圈起来的字符代替指定区域。如果没有指定要圈住的字符，则 WPS 将圈住指定区域中的全部文本。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将用带有圆圈的数字 25 来代替当前选定的内容。*/
function test() {
    Selection.Range.ModifyEnclosure(wdEncloseStyleLarge, wdEnclosureCircle, "25")
}
```


```JavaScript
/*本示例将用带有方形的字符串“example”来代替活动文档的第一个段落的内容。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.ModifyEnclosure(wdEncloseStyleSmall, wdEnclosureSquare, "example")
}
```
