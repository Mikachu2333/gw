# OMath 对象

代表一个公式。 **OMath** 对象是 **OMaths** 集合的成员。

## 说明


可使用 **OMaths** 集合的 **Add** 方法来创建一个公式，然后将其添加到文档、所选内容或区域中。


## 示例


```JavaScript
/*本示例创建一个公式，并且使用 BuildUp 方法将该公式转换为专业格式。*/
function test() {
    let range = Selection.Range
    range.Text = "Celsius = (5/9)(Fahrenheit - 32)"
    range.Select()
    Selection.OMaths.Add(range)
    range.OMaths.Item(1).BuildUp()
}
```


```JavaScript
/*本示例显示第一个文档上第二个公式的展示格式类型是否为专业格式。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(2)
    alert(oMath.Type == wdOMathDisplay)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Functions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/member/Functions) | 返回一个 **[OMathFunctions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathFunctions/obj)** 集合，该集合代表公式中包含的函数。只读。 |
| [Justification](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/member/Justification) | 返回或设置一个 **[WdOMathJc](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOMathJc)** ，代表公式的对齐方式。可读写。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表包含在指定对象中的文档部分。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/member/Type) | 返回或设置一个 **WdOMathType** 常量，该常量表示是以内嵌方式显示公式（使文本围绕在公式的周围），还是在单独的行上显示公式。可读写。 |