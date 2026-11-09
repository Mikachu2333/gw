# ListFormat.ListValue

返回指定的 **ListFormat** 对象区域中第一段的数值。 **Long** 类型，只读。



## 语法

express.**ListValue**

express   一个代表 **ListFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **ListString** 属性可返回代表列表值的字符串。

如果 **ListFormat** 对象应用于项目符号列表，则 **ListValue** 属性返回 1。

如果 **ListFormat** 对象应用于多级符号列表，则 **ListValue** 属性返回第一段的数值，将该序列的段落视为与其他段落在同一级别。例如，如果指定 ListFormat 对象的第一段的编号为“A.2”，则 **ListValue** 返回 2。

该属性不会返回 LISTNUM 域的值。



## 示例


```JavaScript
/*本示例显示选定内容中第一段的编号和代表列表值的字符串。*/
function test() {
    let listValue = Selection.Range.ListFormat.ListValue
    let listString = Selection.Range.ListFormat.ListString
    alert(`List value ${listValue} is represented by the string ${listString}`)
}
```


```JavaScript
/*本示例显示活动文档的主文章文档的第一段的数字值。*/
function test() {
    alert(ActiveDocument.Content.ListFormat.ListValue)
}
```
