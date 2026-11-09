# ListFormat.ListString

返回一个 **String** 类型的值，该值代表指定的 **ListFormat** 对象区域中第一段的列表值的外观。例如，字母顺序列表中第二段的返回值为“B”。只读。



## 语法

express.**ListString**

express   一个代表 **ListFormat** 对象的变量。

## 类型

string

## 说明


对于项目符号列表，必须应用正确的字体才能看到字符串。大多数项目符号使用 Symbol 或 Wingdings 字体。

使用 **[ListValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ListValue)** 属性可返回段落的数值。



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
/*本示例显示活动文档的主文章文档的第一段的列表值的字符串。*/
function test() {
    alert(ActiveDocument.Content.ListFormat.ListString)
}
```
