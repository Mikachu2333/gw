# Paragraph.AddSpaceBetweenFarEastAndDigit

如果 WPS 将自动在指定段落的日文文字和数字之间添加空格，则该属性值为 **True** 。如果仅对于某些指定段落将该属性设置为 **True** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**AddSpaceBetweenFarEastAndDigit**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 WPS 在活动文档第一段的中文文字和数字之间自动添加空格。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).AddSpaceBetweenFarEastAndDigit = true
}
```


```JavaScript
/*本示例设置 WPS 在所选内容的第一段的中文文字和数字之间自动添加空格。*/
function test() {
    Application.Selection.Paragraphs.Item(1).AddSpaceBetweenFarEastAndDigit = true
}
```
